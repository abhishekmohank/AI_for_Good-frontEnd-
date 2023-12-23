// LoginPage.jsx

import React, { useState } from 'react';
import './LoginSignup.css'; // Make sure to create and link your CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => { 
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
        const response = await axios.post('http://127.0.0.1:8000/token', formData);
        alert("Login Successfull");
        navigate("/home")
        console.log(response.data);
    } catch (error) {
      if(error.status_code == 400){
        alert("Incorrect username or password")
      }
      else{
        alert(error)
        console.error(error);
      }
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-header'>
          <h2>AI Login</h2>
          <p>Unlock the power of AI</p>
        </div>
        <div className='login-form'>
          <label>
            Username:
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username'
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
            />
          </label>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
