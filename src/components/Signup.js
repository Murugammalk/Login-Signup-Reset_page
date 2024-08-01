import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import './styles.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      setError('');
      // Redirect or perform other actions after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box className="auth-container">
        <Typography variant="h4" className="auth-title">Sign Up</Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { height: '56px', fontSize: '16px' } }}
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
          InputProps={{ style: { height: '56px', fontSize: '16px' } }}
        />
        {error && <Typography color="error" className="error-message">{error}</Typography>}
        {success && <Typography color="success" className="success-message">{success}</Typography>}
        <Button
          variant="contained"
          className="auth-button sign"
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        <Link to="/login" className="auth-link">
          Already have an account? Login
        </Link>
      </Box>
    </Container>
  );
};

export default Signup;
