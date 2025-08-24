const Attendee = require('../models/Attendee.js');
const User = require('../models/Users');

const registerAttendee = async (req, res) => {
 const { eventId, emailId } = req.body;

  try {
    const user = await User.findOne({ email: emailId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const attendee = await Attendee.create({
      userId: user._id,
      eventId,
      name: user.name
    });

    res.status(201).json(attendee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find({});
    res.json(attendees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendees' });
  }
};

module.exports = {
  registerAttendee,
  getAttendees
};