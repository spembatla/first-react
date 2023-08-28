import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/wrappers/App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.css';

const domNode = document.getElementById('root')
const Root = ReactDOM.createRoot(domNode);
Root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
