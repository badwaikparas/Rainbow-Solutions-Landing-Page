const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    complexity: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
})



/// Modal
const Contact = new mongoose.model("Contact", contactSchema)

module.exports = Contact;