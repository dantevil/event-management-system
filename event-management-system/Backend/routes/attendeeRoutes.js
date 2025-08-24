const express = require('express');
const { registerAttendee, getAttendees } = require('../controllers/attendeeController.js');
const verifyToken = require('../middleware/auth.js');

const router = express.Router();
router.post('/registerAttendee', verifyToken, registerAttendee);
router.get('/getAttendees', verifyToken, getAttendees);

module.exports = router;