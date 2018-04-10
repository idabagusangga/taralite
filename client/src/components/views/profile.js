import React, { Component } from 'react';
import { connect } from 'react-redux'
import ActiveLoan from '../activeLoan'
import CashBack from '../cashback'
import { SET_USER } from '../../store/actions/user'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import logo from '../../assets/grab.svg.png'

class Profile extends Component {
  constructor () {
    super () 
    this.state = {
      data: {}
    }
  }
  getUser () {
    axios.post('http://localhost:3000/users/login',{
      nik: 1
    })
      .then(response => {
        console.log(response.data);
        this.props.SET_USER(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentWillMount () {
    this.getUser()
  }
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{`Welcome ${this.props.data.data[0].name}`}</h2>
        <span>Detail Pinjaman</span>
        <ActiveLoan active = {this.props.data.data[0].active}></ActiveLoan>
        <CashBack></CashBack>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.userReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  SET_USER
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);