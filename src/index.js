import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);



 //http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=0347c864d2bf42c0018f6c88f5869e61
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
//api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test
//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// W3@therAP!
