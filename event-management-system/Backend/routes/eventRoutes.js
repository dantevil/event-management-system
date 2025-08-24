const express = require('express');
const { createEvent, getEvents,updateEvent,deleteEvent } = require('../controllers/eventController.js');
const verifyToken  = require('../middleware/auth.js');

const router = express.Router();
router.post('/createEvent', verifyToken, createEvent);
router.get('/getEvents', verifyToken, getEvents);
router.put('/events/:id', verifyToken,updateEvent);
router.delete('/events/:id', verifyToken,deleteEvent);

module.exports = router;