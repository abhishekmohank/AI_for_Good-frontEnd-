// Signup.jsx

import React, { useState } from 'react';
import './signup.css'; // Make sure to create and link your CSS file
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signing up with:', { username, password });
    // Redirect or perform additional actions after successful signup
  };

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-header'>
          <h2>Create an Account</h2>
          <p>Join the AI community</p>
        </div>
        <div className='signup-form'>
          <label>
            Username:
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Choose a username'
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Choose a password'
            />
          </label>
          <label>
           Confirm Password:
            <input
              type='password'
              value={confirmpassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              placeholder='Confirm the password'
            />
          </label>
          <button onClick={handleSignup}>Sign Up</button>

          {/* Add the link to the login page */}
          <p>
            Already have an account?{' '}
            <Link to='/'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
