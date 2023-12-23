// Signup.jsx

import React, { useState } from 'react';
import './signup.css'; // Make sure to create and link your CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    // console.log('Signing up with:', { username, password });
  
    if (password !== confirmpassword) {
      alert('Password and confirm password should be the same.');
    }
    else{
      const user = {
        username: username,
        password: password
      };

      try {
          const response = await axios.post('http://127.0.0.1:8000/signup/', user);
          console.log(response.data);
          alert('Sign Up Successfull');
          navigate("/");
      } catch (error) {
          console.error(error);
      }
      
    }
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
