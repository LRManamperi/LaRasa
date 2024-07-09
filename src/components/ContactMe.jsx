import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import Contact from '../assets/pexels-andres-ayrton-6551313.jpg';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setAlertMessage('All fields are required');
      setAlertSeverity('error');
      setOpen(true);
      return;
    }

    // Formspree endpoint
    const endpoint = 'https://formspree.io/f/meojqbrw'; // Replace YOUR_FORM_ID with your actual Formspree form ID

    // Prepare form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the form data
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setAlertMessage('Message sent successfully');
        setAlertSeverity('success');
      } else {
        setAlertMessage('Failed to send message');
        setAlertSeverity('error');
      }
    } catch (error) {
      setAlertMessage('An error occurred');
      setAlertSeverity('error');
    }
    setOpen(true);

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box 
      sx={{ 
        pt: 8, 
        pb: 8, 
        textAlign: 'center',
        backgroundImage: `url(${Contact})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the image
        color: 'white', // Ensure text is readable on the background
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
        Contact Me
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ 
          mt: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 3,
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2, width: '300px', backgroundColor: 'white' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2, width: '300px', backgroundColor: 'white' }}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 2, width: '300px', backgroundColor: 'white' }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#115293',
            },
            padding: '10px 20px',
            borderRadius: '20px',
          }}
        >
          Send
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactMe;
