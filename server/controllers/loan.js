const Loan = require('../models/loan')
const User = require('../models/user')

class LoanController {
  static createLoan (req, res) {
    let newLoan = new Loan ({
      amount: req.body.amount,
      cashback_eligible: req.body.cashback,
      application_date: Date.now(),
      status: 'active'
    })
    newLoan.save()
      .then(response => {
        //token here 5acb3f39c6def7287d4d0dc5
        User.findById(req.params.id)
          .then(resp => {
            if(!resp.active) {
              resp.active = response
              resp.save()
               .then(r => {
                 res.status(200).json({data: r})
               })
               .catch(err => {
                 console.log(err);
               })  
            } else {
              res.status(200).json({
                msg: 'You still have an active loan',
                data: resp
              })  
            }
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }
  static getLoan (req, res) {
    Loan.findById(req.params.id).populate('payments')
      .then(r => {
        res.status(200).json({
          data: r
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = LoanController;