import axios from 'axios';
import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

 
 export default function Login() {
   return (
    <>
    <div id="login" className="p-5" >
        <div id="innerDiv" style={mystyle} className="m-auto rounded p-5 text-center">
            <main>
                <form className="form-login w-100">
                    <img className="mb-4" src={logo} alt="" style={mystyle2}/>
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <button id="sub_btn" className="btn btn-primary btn-lg btn-block" onSubmit={login} type="submit">Login</button>
                </form>
                <p className="text-center">Don't have an account, <Link className="link" to="/signup">Signup</Link></p> 
            </main>
        </div>
    </div>
    </>
   )
 }

 const mystyle = {
    border: '1px solid gray',
    backgroundColor: 'rgb(190, 190, 190)',
    width: '30vw'
  };
  
  const mystyle2 = {
    height: '75px',
    width: '75px'
  };


const login = async () => {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;


  
const response = await axios.post('/login', {
    email,
    password
  });

  if (response.status === 200) {
    // Login successful!

    
// Redirect to the home page
  } else {
    // Login failed

    
// Display an error message
  }
};