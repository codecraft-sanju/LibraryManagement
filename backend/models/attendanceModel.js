import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);
