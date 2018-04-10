const User = require('../models/user')

class UserController {
  static getUser (req, res) {
    User.find({nik:req.body.nik}).populate({
      path: 'active',
      populate: {
        path: 'payments'
      }
    })
    .populate({
      path: 'closed',
      populate: {
        path: 'payments'
      }
    })
      .then(response => {
        res.status(200).json({
          data: response
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          msg: 'user not found'
        })
      })
  }
  static createUser (req, res) {
    let newUser = new User ({
      name: req.body.name,
      nik: req.body.nik
    })
    newUser.save()
      .then(response => {
        res.status(200).json({
          msg: 'user created',
          data: response
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = UserController;