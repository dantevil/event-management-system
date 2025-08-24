const Organizer = require('../models/Organizer.js');

const createOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.create({ ...req.body, userId: req.user.id });
    res.json(organizer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating organizer' });
  }
};

const getOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find().populate('userId');
    res.json(organizers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching organizers' });
  }
};

module.exports = {
  createOrganizer,
  getOrganizers
};