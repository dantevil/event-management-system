const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['organizer', 'attendee'], default: 'attendee' }
});

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // this will hash the given password and make it more secure
  }
});

module.exports = mongoose.model('User', userSchema);