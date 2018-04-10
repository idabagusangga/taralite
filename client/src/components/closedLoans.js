import React, { Component } from 'react';
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'
 
class ClosedLoans extends Component {
  
  formatCurrency (n , currency) {
    return currency + ' ' + n.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')
  }
  
  totalPayment (payments) {
    console.log(this.props.closed);
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
        <p>{this.formatCurrency(Number(this.props.closed.amount), 'Rp.')}</p>
        <h3>Jumlah Pembayaran</h3>
        <p>{this.formatCurrency(this.totalPayment(this.props.closed.payments), 'Rp.')}</p>
        <h3>Tanggal Terakhir Pembayaran</h3>
        <p>{this.props.closed.payments[this.props.closed.payments.length-1].date}</p>
        <h3>Status Pinjaman</h3>
        <h3 style={{color: '#1A9D68'}}>CLOSED</h3>
        <Button type="primary" style={{backgroundColor:'#1A9D68', marginTop: '18px'}}><Link to={`/loanhistory/${this.props.closed._id}`}>Riwayat Pembayaran</Link></Button>
      </Card>
    );
  }
}

export default ClosedLoans;