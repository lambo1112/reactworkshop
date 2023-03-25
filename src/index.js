import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './index_ver3.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_Router from './App_Router/App_Router';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './management/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App_Router/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
