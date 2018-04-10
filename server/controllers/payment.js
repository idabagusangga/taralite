const Payment = require('../models/payment')
const Loan = require('../models/loan')
const User = require('../models/user')
const moment = require('moment')

class PaymentController {
  static createPayment (req, res) {
    let newPayment = new Payment ({
      amount: req.body.amount,
      date: moment().format('YYYY-MM-DD')
    })
    newPayment.save()
      .then(response => {
        Loan.findById(req.params.id).populate('payments')
          .then(result => {
            result.payments.push(response)
            let totalPayments = 0
            result.payments.forEach(payment => {
              totalPayments += payment.amount
            })
            console.log(totalPayments);
            console.log(result.amount);
            totalPayments  <= result.amount ?
            result.status = 'active' : result.status = 'close'
            result.save()
              .then(data => {
                data.status === 'close' ?
                User.findOne({active:data._id})
                  .then(r => {
                    console.log(r);
                    r.active = null
                    r.closed.push(data)
                    r.save()
                      .then(final => {
                        res.status(200).json({
                          data: final
                        })
                      })
                  })
                  .catch(err => {
                    console.log(err);
                  })
                :
                res.status(200).json({
                  msg: 'belom lunas',
                  data: data
                })
              })
              .catch(err => {
                console.log(err);
              })
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = PaymentController;