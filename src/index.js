import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Routes} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Routes history={history} >
      <App />
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
