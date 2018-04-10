const express = require('express')
const router = express.Router();
const loanController = require('../controllers/loan')

router.post('/:id', loanController.createLoan)
router.get('/:id', loanController.getLoan)

module.exports = router;