const mongoose = require('mongoose')

// Create a contact form schema
const contactFormSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
})

// Create a contact form model
const ContactForm = mongoose.model('ContactForm', contactFormSchema)

module.exports = ContactForm
