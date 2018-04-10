const express = require('express')
const router = express.Router();
const paymentController = require('../controllers/payment')

router.post('/:id', paymentController.createPayment)

module.exports = router;