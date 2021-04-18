import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
