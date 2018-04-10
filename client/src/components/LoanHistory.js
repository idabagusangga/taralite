import React, { Component } from 'react';
import axios from 'axios'
import { Card } from 'antd'

class LoanHistory extends Component {
  constructor() {
    super()
    this.state = {
      loan: []
    }
  }
  getLoan (id) {
    axios.get(`http://localhost:3000/loan/${id}`)
    .then(response => {
      this.setState({
        loan: response.data.data.payments
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  componentWillMount () {
    this.getLoan(this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <h2>Riwayat Pembayaran</h2>
          {
            this.state.loan.map(payment => {
              return (
                <Card style={{ width: '34%', margin: 'auto' }}>
                  <h3>{payment.amount}</h3>
                  <p>{payment.date}</p>
                </Card>  
              )
            })
          }
      </div>
    );
  }
}

export default LoanHistory;