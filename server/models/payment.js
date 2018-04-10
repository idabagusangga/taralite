const mongoose = require('mongoose')

const Schema = mongoose.Schema
const paymentSchema = new Schema ({
  amount: Number,
  date: {
    type: String
  }
})

module.exports = mongoose.model('Payments', paymentSchema);