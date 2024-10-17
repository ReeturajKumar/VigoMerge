const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../Controller/contactController');

// Route to handle form submission
router.post('/', submitContactForm);

module.exports = router;
