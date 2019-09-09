import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/LoginPage.react';
import Register from './Register/Register.react';
import Navigation from './Navigation/Navigation.react';
import 'bootstrap/dist/css/bootstrap.css';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard.react';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
