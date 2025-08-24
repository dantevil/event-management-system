const express = require('express');
const { createOrganizer, getOrganizers } = require('../controllers/organizerController.js');
const verifyToken = require('../middleware/auth.js');

const router = express.Router();
router.post('/createOrganizer', verifyToken, createOrganizer);
router.get('/getOrganizers', verifyToken, getOrganizers);

module.exports = router;