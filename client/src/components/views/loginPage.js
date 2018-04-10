import React, { Component } from 'react';
import logo from '../../assets/grab.svg.png';
import { Card, Input, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SET_USER } from '../../store/actions/user'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      nik: '',
      isAuth: false
    }
  }
  
  handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name] : value
    })
  }
  
  submitHandler = (e) => {
    e.preventDefault()
    console.log('hehehehhe', e.target.nik.value);
    axios.post('http://localhost:3000/users/login',{
      nik: e.target.nik.value
    })
      .then(response => {
        console.log(response.data);
        this.props.SET_USER(response.data)
        this.setState({
          isAuth : true
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    if (this.state.isAuth) {
      return <Redirect to='/profile' push={true}></Redirect>
    }
    return (
      <div>
      <form onSubmit={this.submitHandler}>
      <Card title={<img src={logo} className="App-logo" alt="logo" />} style={{ width: '34%', margin: 'auto' }}>
        <h2>Driver Sign-In</h2>
        <p>Masukan NIK</p>

        <input placeholder='Robins NIK is 1' name='nik'></input>
        
      </Card>
      <Button type="primary" style={{backgroundColor:'#1A9D68', marginTop: '18px'}} htmlType='submit'>Submit</Button>
      </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  SET_USER
}, dispatch)

export default connect(null, mapDispatchToProps)(Login);