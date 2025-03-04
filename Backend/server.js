import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './contactRoutes.js';
import hireusRoutes from './hireusRoutes.js';
import connectDB from './database.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/hireus', hireusRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
