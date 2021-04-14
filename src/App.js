import './App.css';
import f9 from './images/f9.png';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Component/Home/Navbar';
import Home from './Component/Home/Home';
import Bookings from './Component/Bookings/Bookings';
import Table from './Component/Bookings/Table';
import Order from './Component/Bookings/Order';
import Menu from './Component/Menu/Menu';
class App extends Component {
  render() {
    return (
      <container>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Bookings" component={Bookings} exact />
              <Route path="/Table" component={Table} exact />
              <Route path="/Order" component={Order} exact />
              <Route path="/Menu" component={Menu} exact />
              <Route component={Error} />
            </Switch>

          </div>
        </BrowserRouter>

        <div className="logo">
          <img src={f9} alt="" width="160em" height="160em" srcset="" />
        </div>
      </container>

    );
  }
}

export default App;
