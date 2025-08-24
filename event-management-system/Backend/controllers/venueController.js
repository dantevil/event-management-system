const Venue = require('../models/Venue.js');

const createVenue = async (req, res) => {
  try {
    const venue = await Venue.create(req.body);
    res.json(venue);
  } catch (error) {
    res.status(500).json({ message: 'Error creating venue' });
  }
};

const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching venues' });
  }
};


module.exports = {
  createVenue,
  getVenues
};