import React, { Component } from 'react';
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

class CashBack extends Component {
  render() {
    return (
      <div>
      <Card style={{ width: '34%', margin: 'auto' }}>
        <h3>Dapatkan Cashback!</h3>
        <p>Lunasi pinjaman kamu tepat waktu dan dapatkan cashback sebesar Rp. 80,000</p>
      </Card>
      <Button type="primary" style={{backgroundColor:'#1A9D68', marginTop: '18px'}}><Link to={'/loans'}>Riwayat Pinjaman</Link></Button>
      </div>
    );
  }
}

export default CashBack;