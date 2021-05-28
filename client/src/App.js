import React from 'react';
import './App.css';
import Currency from './components/Currency';
import Calculator from './components/Calculator';
import './gadget.css';
import Main from './views/Main';
import Clock from './components/Clock'
import Map from './components/Map';
import Stopwatch from './components/Stopwatch';
import {Router, Link} from '@reach/router';
import Weather from './components/Weather';
import TheCalendar from './components/Calendar';
import NewsAPI from './components/NewsAPI';

function App() {
  return (
    <div className="App">   
      <div  className="nav"><Link style={{color: "black", textDecoration: "none", textShadow: "2px 0px 0px #5B9AD4"}} to="/">Gadget Hub</Link></div>
      <Router>
      <Main path="/"/>
      <Currency path="/currency"/>
      <Calculator path="/calculator"/>
      <Weather path="/weather"/>
      <TheCalendar path="/calendar"/>
      <Map path="/map"/>
      <Stopwatch path="/stopwatch"/>
      <Clock path="/clock"/>
      <NewsAPI path="news"/>
      </Router>
    </div>
  );
}

export default App;
