const express = require('express');
const { createVenue, getVenues } = require('../controllers/venueController.js');
const verifyToken = require('../middleware/auth.js');

const router = express.Router();
router.post('/createVenue', verifyToken, createVenue);
router.get('/getVenues', verifyToken, getVenues);

module.exports = router;