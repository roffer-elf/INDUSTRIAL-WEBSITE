import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define Contact Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// POST route for contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default router;
