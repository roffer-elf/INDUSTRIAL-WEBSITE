import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define HireUs Schema
const hireusSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    service: String,
    timestamp: { type: Date, default: Date.now }
});
const HireUs = mongoose.model('HireUs', hireusSchema);

// POST route for Hire Us form
router.post('/', async (req, res) => {
    try {
        const { name, email, number, service } = req.body;
        const newHireUs = new HireUs({ name, email, number, service });
        await newHireUs.save();
        res.status(201).json({ success: true, message: 'Request received!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default router;
