// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g. send login request to server
    console.log("Username:", username);
    console.log("Password:", password);
    fetch(`${import.meta.env.VITE_SERVER_URI}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        query: `
        mutation Mutation($username: String!, $password: String!) {
            loginuser(username: $username, password: $password) {
              token
              user {
                createdAt
                email
                id
              }
            }
          }`,
        variables: { username, password }
       }),
    }).then(res=>res.json()).then((data) => {
        if(!data.errors) {
          localStorage.setItem('token', data.data.loginuser.token)
          navigate('/')
        }
    })
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
