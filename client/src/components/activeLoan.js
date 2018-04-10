import React, { Component } from 'react';
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'
 
class ActiveLoan extends Component {
  
  formatCurrency (n , currency) {
    return currency + ' ' + n.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')
  }
  
  totalPayment (payments) {
    let totalPayment = 0 
    payments.map(payment => {
      totalPayment += payment.amount
    })
    return totalPayment
  }
  
  toPayHistory = (e) => {
    e.preventDefault()
    this
  }
  
  render() {
    return (
      <Card style={{ width: '34%', margin: 'auto' }}>
        <h3>Jumlah Pinjaman</h3>
        <p>{this.formatCurrency(Number(this.props.active.amount), 'Rp.')}</p>
        <h3>Jumlah Pembayaran</h3>
        <p>{this.formatCurrency(this.totalPayment(this.props.active.payments), 'Rp.')}</p>
        <h3>Tanggal Terakhir Pembayaran</h3>
        <p>{this.props.active.payments[this.props.active.payments.length-1].date}</p>
        <h3>Status Pinjaman</h3>
        <h3 style={{color: 'yellow'}}>ACTIVE</h3>
        <Button type="primary" style={{backgroundColor:'#1A9D68', marginTop: '18px'}}><Link to={'/history'}>Riwayat Pembayaran</Link></Button>
      </Card>
    );
  }
}

export default ActiveLoan;