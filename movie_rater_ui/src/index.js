import React from 'react';
import ReactDOM from 'react-dom/client';
import {CookiesProvider} from 'react-cookie'
import reportWebVitals from './reportWebVitals'
import {Route, BrowserRouter, Routes} from 'react-router-dom'

import './index.css';
import App from './App';
import Auth from './components/auth/auth'


/* const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Auth/>}/>
          <Route exact path='/movies' element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);   */

 function Router(){
  return(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Auth/>}/>
          <Route exact path='/movies' element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
  )
}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
