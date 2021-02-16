import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import calc from './components/img/calc2.png'

ReactDOM.render(
  <BrowserRouter>
      <Favicon url={calc} />
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

