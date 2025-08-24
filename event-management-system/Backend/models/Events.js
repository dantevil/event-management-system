const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer' },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendees' }]
});

module.exports = mongoose.model('Event', eventSchema);