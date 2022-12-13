import React, {useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Auth from './components/auth/auth';

/* const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/movies' element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);  */

export const TokenContext = createContext(null)

function Router(){
  const [token, setToken] = useState('');
  return(
    <TokenContext.Provider value={{token, setToken}}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path='/movies' element={<App/>}/>
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
    </TokenContext.Provider>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
