const express = require('express');
const { body, validationResult } = require('express-validator');
const { verifyToken, requirePatient, requireDoctorOrAdmin } = require('../middlewares/auth');
const Appointment = require('../models/Appointment');

const router = express.Router();

// Validation rules
const appointmentValidation = [
  body('doctor').isMongoId().withMessage('Valid doctor ID is required'),
  body('appointmentDate').isISO8601().withMessage('Valid date is required'),
  body('appointmentTime').notEmpty().withMessage('Appointment time is required'),
  body('reason').trim().isLength({ min: 5, max: 500 }).withMessage('Reason must be between 5 and 500 characters'),
  body('department').notEmpty().withMessage('Department is required')
];

// Create appointment (Patient)
router.post('/', verifyToken, requirePatient, appointmentValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { doctor, appointmentDate, appointmentTime, reason, department, symptoms } = req.body;

    // Check doctor availability
    const isAvailable = await Appointment.checkDoctorAvailability(doctor, appointmentDate, appointmentTime);
    if (!isAvailable) {
      return res.status(400).json({
        success: false,
        message: 'Doctor is not available at the selected time'
      });
    }

    const appointment = new Appointment({
      patient: req.user._id,
      doctor,
      appointmentDate,
      appointmentTime,
      reason,
      department,
      symptoms: symptoms || []
    });

    await appointment.save();
    await appointment.populate(['patient', 'doctor'], 'name email phone');

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: { appointment }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to book appointment',
      error: error.message
    });
  }
});

// Get user appointments
router.get('/my-appointments', verifyToken, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (req.user.role === 'patient') {
      query.patient = req.user._id;
    } else if (req.user.role === 'doctor') {
      query.doctor = req.user._id;
    }
    
    if (status) query.status = status;

    const appointments = await Appointment.find(query)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email phone')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ appointmentDate: 1, appointmentTime: 1 });

    const total = await Appointment.countDocuments(query);

    res.json({
      success: true,
      data: {
        appointments,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments',
      error: error.message
    });
  }
});

// Get all appointments (Admin/Doctor)
router.get('/', verifyToken, requireDoctorOrAdmin, async (req, res) => {
  try {
    const { status, date, doctor, patient, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (date) query.appointmentDate = new Date(date);
    if (doctor) query.doctor = doctor;
    if (patient) query.patient = patient;

    const appointments = await Appointment.find(query)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email phone')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ appointmentDate: 1, appointmentTime: 1 });

    const total = await Appointment.countDocuments(query);

    res.json({
      success: true,
      data: {
        appointments,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments',
      error: error.message
    });
  }
});

// Get appointment by ID
router.get('/:id', verifyToken, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('patient', 'name email phone age gender')
      .populate('doctor', 'name email phone');

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Check authorization
    const isAuthorized = 
      req.user.role === 'admin' ||
      appointment.patient._id.toString() === req.user._id.toString() ||
      appointment.doctor._id.toString() === req.user._id.toString();

    if (!isAuthorized) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: { appointment }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointment',
      error: error.message
    });
  }
});

// Update appointment
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Check authorization
    const isAuthorized = 
      req.user.role === 'admin' ||
      appointment.patient.toString() === req.user._id.toString() ||
      appointment.doctor.toString() === req.user._id.toString();

    if (!isAuthorized) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    const allowedUpdates = ['appointmentDate', 'appointmentTime', 'reason', 'status', 'notes', 'vitals', 'diagnosis', 'prescription'];
    const updates = {};

    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    // If rescheduling, check availability
    if (updates.appointmentDate || updates.appointmentTime) {
      const newDate = updates.appointmentDate || appointment.appointmentDate;
      const newTime = updates.appointmentTime || appointment.appointmentTime;
      
      const isAvailable = await Appointment.checkDoctorAvailability(
        appointment.doctor,
        newDate,
        newTime,
        appointment._id
      );

      if (!isAvailable) {
        return res.status(400).json({
          success: false,
          message: 'Doctor is not available at the selected time'
        });
      }
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).populate(['patient', 'doctor'], 'name email phone');

    res.json({
      success: true,
      message: 'Appointment updated successfully',
      data: { appointment: updatedAppointment }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update appointment',
      error: error.message
    });
  }
});

// Cancel appointment
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Check authorization
    const isAuthorized = 
      req.user.role === 'admin' ||
      appointment.patient.toString() === req.user._id.toString();

    if (!isAuthorized) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    appointment.status = 'cancelled';
    appointment.cancelledBy = req.user._id;
    appointment.cancellationReason = req.body.reason || 'Cancelled by user';
    
    await appointment.save();

    res.json({
      success: true,
      message: 'Appointment cancelled successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to cancel appointment',
      error: error.message
    });
  }
});

// Get available time slots
router.get('/availability/:doctorId', async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Date is required'
      });
    }

    // Get existing appointments for the doctor on the specified date
    const existingAppointments = await Appointment.find({
      doctor: doctorId,
      appointmentDate: new Date(date),
      status: { $nin: ['cancelled', 'no-show'] }
    }).select('appointmentTime');

    const bookedTimes = existingAppointments.map(apt => apt.appointmentTime);

    // Define available time slots (this could be fetched from doctor's schedule)
    const allTimeSlots = [
      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
      '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
    ];

    const availableSlots = allTimeSlots.filter(slot => !bookedTimes.includes(slot));

    res.json({
      success: true,
      data: { availableSlots }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch availability',
      error: error.message
    });
  }
});

module.exports = router;