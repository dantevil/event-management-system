const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: String,
  name:String
});

module.exports = mongoose.model('Organizers', organizerSchema);