import React from 'react';
import './script'
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContext from './GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <App/>
    </GlobalContext>
  </React.StrictMode>
);