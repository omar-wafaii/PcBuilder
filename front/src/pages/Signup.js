import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom' ;
import "../App.css"

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [registerStat, setRegisterStat] = useState('');
  console.log(formData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      navigate("/Home");
    } catch (error) {
      console.error('Error during registration:', error.message);
      setRegisterStat("username or email already exist.");
      
    }
  };

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        {registerStat}
        <button type="submit">Sign Up</button>
        <p>already have an account ? <Link to="/login">login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
