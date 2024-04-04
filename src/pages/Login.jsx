import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebase from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(firebase);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/user-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Save additional user information if needed
      console.log('New user created:', email, fullName);
      navigate('/user-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-form">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {isSignup && (
            <>
              <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </>
          )}
          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <p onClick={toggleSignup}>{isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}</p>
      </div>
    </div>
  );
}

export default Login;




