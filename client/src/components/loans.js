import React, { Component } from 'react';
import { connect } from 'react-redux'
import ClosedLoans from './closedLoans'

class Loans extends Component {
  render() {
    return (
      <div>
        <h2>Riwayat Pinjaman</h2>
        {
          this.props.data.map(loan => {
            return (
              <ClosedLoans closed={loan}></ClosedLoans>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.userReducer.data[0].closed
  }
}

export default connect(mapStateToProps)(Loans);