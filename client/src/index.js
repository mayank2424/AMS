// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/tailwind.css';
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux';
import storeConfigure from './store';



ReactDOM.render(
  <React.StrictMode>
     <Provider store={storeConfigure()}>
        <App />
     </Provider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
