import React, { useState, useEffect} from 'react'
import API from '../../api-service';
import { useCookies } from 'react-cookie';

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const[isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['mr-token']);

    useEffect(() => {
        if(token['mr-token']) window.location.href='/movies'
    },[token])
    

    const signInClicked = () =>{
        API.signInUser({username,password})
        .then(resp => setToken('mr-token',resp.token))
        .catch(error => console.log(error));
    }

    const signUpClicked = () =>{
        API.registerUser({username,password})
        .then(() =>signInClicked())
        .catch(error => console.log(error));
    }

    const isDisabled = username.length === 0 || password.length ===0;

  return (
    <div className='App'>
        <header className='App-header'>
        {isLoginView ? <h1>Sign In</h1> :<h1>Sign Up</h1>}
        </header>
        <div className='login-container'>
            <label htmlFor="username">Username</label> <br/>
            <input id="username" type="text" placeholder='username' value={username} 
            onChange={ evt => setUsername(evt.target.value)}/>
            <br/>

            <label htmlFor="password">Password</label><br/>
            <input id="password" type="password" placeholder='password' value={password} 
            onChange={ evt => setPassword(evt.target.value)}/>
            <br/>
            
            {isLoginView ? <button type='submit' onClick={signInClicked} disabled={isDisabled}>Sign In</button>
            : <button type='submit' onClick={signUpClicked} disabled={isDisabled}>Sign Up</button>}
            
            {isLoginView ? 
            <p>Don't have an Account !! <u onClick={()=>setIsLoginView(false)}>Sign Up</u></p> 
            :<p>Already have an account !! <u onClick={()=>setIsLoginView(true)}>Sign In</u></p> }
        </div>   
    </div>
  )
}

export default Auth ;
