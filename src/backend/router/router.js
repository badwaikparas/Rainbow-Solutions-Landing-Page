const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')


router.route('/addContact').all(controller.addContact)
module.exports = router

