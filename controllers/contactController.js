const ContactForm = require('../models/contactModel.js')

const contact = async (req, res) => {
  const { name, phone, email, subject, message } = req.body

  const newContact = new ContactForm({ name, phone, email, subject, message })

  try {
    await newContact.save()
    res.status(201).json(newContact)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

module.exports = { contact }
