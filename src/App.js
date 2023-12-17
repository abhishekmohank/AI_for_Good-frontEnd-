// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/LoginSignup/signup';
import HomePage from './components/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<LoginSignup />} />
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
