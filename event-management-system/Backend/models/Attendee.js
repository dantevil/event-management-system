const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  name:String,
  status: { type: String, enum: ['registered', 'cancelled'], default: 'registered' }
});

module.exports = mongoose.model('Attendee', attendeeSchema);