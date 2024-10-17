const Contact = require('../Model/contactModel');

const submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
};

module.exports = {
  submitContactForm,
};
