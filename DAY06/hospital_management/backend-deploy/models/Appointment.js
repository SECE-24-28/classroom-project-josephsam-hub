const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Patient is required']
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Doctor is required']
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required']
  },
  appointmentTime: {
    type: String,
    required: [true, 'Appointment time is required']
  },
  duration: {
    type: Number,
    default: 30 // minutes
  },
  reason: {
    type: String,
    required: [true, 'Reason for appointment is required'],
    maxlength: [500, 'Reason cannot exceed 500 characters']
  },
  symptoms: [String],
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'in-progress', 'completed', 'cancelled', 'no-show'],
    default: 'scheduled'
  },
  type: {
    type: String,
    enum: ['consultation', 'follow-up', 'emergency', 'routine-checkup', 'surgery'],
    default: 'consultation'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  department: {
    type: String,
    required: true
  },
  notes: {
    patient: String,
    doctor: String,
    admin: String
  },
  vitals: {
    bloodPressure: String,
    heartRate: Number,
    temperature: Number,
    weight: Number,
    height: Number
  },
  diagnosis: String,
  prescription: [{
    medication: String,
    dosage: String,
    frequency: String,
    duration: String,
    instructions: String
  }],
  followUpRequired: {
    type: Boolean,
    default: false
  },
  followUpDate: Date,
  cost: {
    consultation: { type: Number, default: 0 },
    procedures: { type: Number, default: 0 },
    medications: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'partially-paid', 'refunded'],
    default: 'pending'
  },
  reminderSent: {
    type: Boolean,
    default: false
  },
  cancelledBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  cancellationReason: String,
  rescheduledFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
appointmentSchema.index({ patient: 1, appointmentDate: 1 });
appointmentSchema.index({ doctor: 1, appointmentDate: 1 });
appointmentSchema.index({ status: 1 });
appointmentSchema.index({ appointmentDate: 1, appointmentTime: 1 });

// Virtual for full appointment datetime
appointmentSchema.virtual('fullDateTime').get(function() {
  const date = new Date(this.appointmentDate);
  const [time, period] = this.appointmentTime.split(' ');
  const [hours, minutes] = time.split(':');
  
  let hour24 = parseInt(hours);
  if (period === 'PM' && hour24 !== 12) hour24 += 12;
  if (period === 'AM' && hour24 === 12) hour24 = 0;
  
  date.setHours(hour24, parseInt(minutes), 0, 0);
  return date;
});

// Pre-save middleware to calculate total cost
appointmentSchema.pre('save', function(next) {
  if (this.cost) {
    this.cost.total = (this.cost.consultation || 0) + 
                     (this.cost.procedures || 0) + 
                     (this.cost.medications || 0);
  }
  next();
});

// Static method to check doctor availability
appointmentSchema.statics.checkDoctorAvailability = async function(doctorId, date, time, excludeAppointmentId = null) {
  const query = {
    doctor: doctorId,
    appointmentDate: date,
    appointmentTime: time,
    status: { $nin: ['cancelled', 'no-show'] }
  };
  
  if (excludeAppointmentId) {
    query._id = { $ne: excludeAppointmentId };
  }
  
  const existingAppointment = await this.findOne(query);
  return !existingAppointment;
};

// Method to send reminder
appointmentSchema.methods.sendReminder = async function() {
  // Implementation for sending appointment reminders
  // This would integrate with email/SMS service
  this.reminderSent = true;
  return this.save();
};

module.exports = mongoose.model('Appointment', appointmentSchema);