import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Auth from './components/auth/auth';




const root = ReactDOM.createRoot(document.getElementById('root'));
export const TokenContext= createContext(null);
const TOKEN = "625053af7b8ec3c1711c8002e14054b3a2f0263c";


root.render(
  <React.StrictMode>
    <TokenContext.Provider value={TOKEN}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Auth/>} />
            <Route  path="/movies" element={<App/>} />
          </Routes>
        </BrowserRouter>
    </TokenContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
