const mongoose = require('mongoose')

const Schema = mongoose.Schema

const loanSchema = new Schema ({
  amount: String,
  application_date: {
    type: Number,
    default: 0
  },
  cashback_eligible: Boolean,
  disbursement_date: {
    type: Number,
    default: 0
  },
  fully_paid_date: {
    type: Number,
    default: 0
  },
  last_payment_date: Number,
  paid: Number,
  payments: [{
    type: Schema.Types.ObjectId,
    ref: 'Payments'
  }],
  status: String
})

module.exports = mongoose.model('Loan', loanSchema);