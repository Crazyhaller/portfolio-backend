// Import required modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Create an Express app
const app = express()

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Connected to MongoDB')
    }
  }
)

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

// Use body-parser to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }))

// Create a route to handle contact form submissions
app.post('/contact-form', async (req, res) => {
  // Get the contact form data from the request body
  const { name, phone, email, subject, message } = await req.body

  // Create a new contact form object
  const contactForm = new ContactForm({
    name,
    phone,
    email,
    subject,
    message,
  })

  // Save the contact form object to MongoDB
  await contactForm.save()

  // Respond to the user with a success message
  res.status(200).json({ message: 'Contact form submitted successfully' })
})

// Start the Express app
app.listen(3000, () => {
  console.log('Express app listening on port 3000')
})
