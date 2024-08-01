import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'https://chat.openai.com';
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = 'https://chat.openai.com';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box className="auth-container">
        <Typography variant="h4" className="auth-title">Login</Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error" className="error-message">{error}</Typography>}
        <Button
          variant="contained"
          className="auth-button log"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="contained"
          className="auth-button google"
          startIcon={<FcGoogle />}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
        <Link to="/signup" className="auth-link">
          Don't have an account? Sign up
        </Link>
        <Link to="/reset-password" className="auth-link">
          Forgot password?
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
