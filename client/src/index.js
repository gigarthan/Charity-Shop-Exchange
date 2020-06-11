import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import './assets/styles/tailwind.css';
// @eslint
import ogImage from './assets/img/charity_shop_exchange.png'; // Just so that Netlify includes it in /static/media/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
