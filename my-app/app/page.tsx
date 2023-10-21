'use client';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';



// Mock user data
const users = [
  {
    username: 'user1',
    password: 'password1',
    active_module: 'module1',
    role: 'admin',
  },
  {
    username: 'user2',
    password:'password2',
    active_module: 'module2',
    role: 'user',
  },
];


export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<UserData | null>(null);


  const handleLogin = (username: any, password: any) => {
    const user = users.find(
      // (u) => u.username === username && bcrypt.compareSync(password, u.password)
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoggedIn(true);
      setUser(user);
      setError('you cant create new account');
    } else {
       setError('Invalid username or password');
    }
  };

  return (
   
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/" />
            ) : (
              <LoginForm onLogin={handleLogin} error={error} />
              
            )
          }
        />
        <Route
          path="/"
          element={
            loggedIn ? (
              <Dashboard user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>

   );
}



interface UserData {
  username: string;
  password: string;
  active_module: string,
  role: string
}