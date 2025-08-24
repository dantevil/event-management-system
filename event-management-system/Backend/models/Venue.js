const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number
});

module.exports = mongoose.model('Venue', venueSchema);