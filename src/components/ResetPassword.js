import React, { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import './styles.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box className="auth-container">
        <Typography variant="h4" className="auth-title">Reset Password</Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <Typography color="error" className="error-message">{error}</Typography>}
        {success && <Typography color="success" className="success-message">{success}</Typography>}
        <Button
          variant="contained"
          className="auth-button reset"
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPassword;
