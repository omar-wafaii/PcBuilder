import React, { useState } from 'react';
import '../App.css'; 
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginStat, setLoginStat] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); try {
      const response = await fetch('http://localhost:5000/login', {
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
      localStorage.setItem('userData', JSON.stringify(data));
      
      console.log('Registration successful:', data);
      navigate("/Home");
    } catch (error) {
      console.error('Error during login:', error.message);
      setLoginStat("wrong username or password.")
      
    }

    
    
  };

  return (
    <div className="signup">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {loginStat}
        <button type="submit">Login</button>
        <p>dont have an account ? <Link to="/signup">sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;
