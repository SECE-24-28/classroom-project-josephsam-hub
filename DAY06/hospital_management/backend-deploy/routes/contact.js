const express = require('express');
const { body, validationResult } = require('express-validator');
const { verifyToken, requireAdmin, optionalAuth } = require('../middlewares/auth');
const Contact = require('../models/Contact');

const router = express.Router();

const contactValidation = [
  body('name').trim().matches(/^[A-Za-z\s]{3,}$/).withMessage('Name must contain only letters and be at least 3 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email address'),
  body('phone').optional().matches(/^\d{10}$/).withMessage('Phone number must be exactly 10 digits'),
  body('subject').trim().isLength({ min: 1, max: 200 }).withMessage('Subject is required and cannot exceed 200 characters'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
  body('department').optional().isIn(['general', 'appointments', 'billing', 'emergency', 'patient-care', 'feedback'])
];

// Submit contact form
router.post('/', optionalAuth, contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const contactData = {
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };

    if (req.body.department === 'emergency') {
      contactData.isEmergency = true;
      contactData.priority = 'urgent';
    }

    const contact = new Contact(contactData);
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
      data: { contactId: contact._id }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
});

// Get all contacts (Admin only)
router.get('/', verifyToken, requireAdmin, async (req, res) => {
  try {
    const { status, department, priority, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (department) query.department = department;
    if (priority) query.priority = priority;

    const contacts = await Contact.find(query)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: {
        contacts,
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
      message: 'Failed to fetch contacts',
      error: error.message
    });
  }
});

// Update contact status (Admin only)
router.put('/:id', verifyToken, requireAdmin, async (req, res) => {
  try {
    const { status, priority, assignedTo, response } = req.body;
    
    const updates = {};
    if (status) updates.status = status;
    if (priority) updates.priority = priority;
    if (assignedTo) updates.assignedTo = assignedTo;
    
    if (response) {
      updates.response = {
        message: response,
        respondedBy: req.user._id,
        respondedAt: new Date()
      };
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: { contact }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update contact',
      error: error.message
    });
  }
});

module.exports = router;