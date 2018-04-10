import React, { Component } from 'react';
import { Card } from 'antd'
import { connect } from 'react-redux'


class History extends Component {
  render() {
    return (
      <div>
        <h2>Riwayat Pembayaran</h2>
      {
        this.props.data.map(payment => {
          return (
            <Card style={{ width: '34%', margin: 'auto' }}>
              <h3>{payment.amount}</h3>
              <p>{payment.date}</p>
            </Card>  
          )
        })
      }
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.userReducer.data[0].active.payments
  }
} 

export default connect(mapStateToProps)(History);