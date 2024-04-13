import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here, e.g. send signup request to server
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    fetch(`${import.meta.env.VITE_SERVER_URI}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        query: `\
        mutation Mutation($password: String!, $username: String, $email: String) {
            signupUser(password: $password, username: $username, email: $email) {
              createdAt
              email
              password
              id
            }
          }`,
        variables: { username, email, password }
       }),
    })
    .then(res=>res.json())
    .then((data) => {
        if(!data.errors) {
          navigate('/')
        }
    })
    // Reset the form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
        <button type="submit" className="submit-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
