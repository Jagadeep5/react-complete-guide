import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.headers.common["Auth"] = "Abc";
axios.interceptors.request.use((req) => {
  if(req.url.indexOf("localhost") === -1){
    req.baseURL = "http://localhost/ApiDataApp/values/";
  }
  return req;
})
ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
