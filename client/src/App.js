import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import LoginPage from './components/views/loginPage'
import Profile from './components/views/profile'
import History from './components/views/history'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loans from './components/loans'
import store from './store/index'
import LoanHistory from './components/LoanHistory'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <Router>
          <div>
          <Route exact path='/' component={LoginPage}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/history' component={History}></Route>
          <Route path='/loans' component={Loans}></Route>
          <Route path='/loanhistory/:id' component={LoanHistory}></Route>
            
          </div>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
