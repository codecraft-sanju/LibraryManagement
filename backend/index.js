import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import attendanceRouter from './routes/attendanceRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // ✅ Use dynamic port

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/attendance', attendanceRouter);

// Default Route
app.use((req, res) => {
  res.send('Hello Sanjay, Your Backend is Working!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
