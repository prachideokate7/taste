import './App.css';
import f9 from './images/f9.png';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Component/Home/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
class App extends Component {
  render() {
    return (
      <container>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />

              <Route component={Error} />
            </Switch>
            <Footer />
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
