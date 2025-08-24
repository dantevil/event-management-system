const Event = require('../models/Events.js');

const createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, organizer: req.user.id });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event' });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};


const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
};


module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
};
