import React, { useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
// import PageHeading from '../PageHeading';
import Spacing from '../Spacing';

export default function LoginPage() {
  pageTitle('Login');

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    // Add your login logic here using 'email' and 'password'
    alert(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <>
    
     
      <Spacing lg="150" md="80" />
      <Div className="container d-flex justify-content-center align-items-center">
        <Div className="row">
                 
        <div>
      <div
        style={{
          width: "800px", // Setting the width of the box
          padding: "50px",
          backgroundColor: "gray",
          borderRadius: "10px", // Adding rounded corners
          boxShadow: "0 0 10px rgba(0, 0, 0, 1)", // Adding a box shadow
          // textAlign: "center", 
        }}
      >
         <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      </div>
          </Div>
        </Div>
      
      <Spacing lg="150" md="80" />
    </>
  );
}
