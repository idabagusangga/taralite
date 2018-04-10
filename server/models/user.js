const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema ({
  nik: {
    type: Number
  },
  name: String,
  active: {
    type: Schema.Types.ObjectId,
    ref: 'Loan'
  },
  closed: [{
    type: Schema.Types.ObjectId,
    ref: 'Loan'
  }]
})

module.exports = mongoose.model('UserLoan', userSchema);