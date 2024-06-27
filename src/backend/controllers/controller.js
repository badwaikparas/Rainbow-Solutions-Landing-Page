const Contact = require('../modals/contactModal')

const addContact = async function (req, res) {
    const { name, email, phone, complexity, message } = req.body;

    if (!name || !email || !phone || !complexity) {
        console.log("All fields are required")
        return res.status(400).send("All fields are required");
    }

    await Contact.create({ name, email, phone, complexity, message })
    res.send({ name, email, phone, complexity, message })
    console.log("Registration completed Successfully")
}
module.exports = { addContact }