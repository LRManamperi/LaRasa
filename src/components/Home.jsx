import React from 'react';
import { Typography, Box, Button, IconButton } from '@mui/material';
import ReactTypingEffect from 'react-typing-effect';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import backgroundImage from '../assets/pexels-codioful-7130496.jpg';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding a dark overlay
        backgroundBlendMode: 'darken', // Ensuring the overlay blends properly
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Lakshani Rasanjali Manamperi
      </Typography>
      <ReactTypingEffect
        text={[
          "I'm a 3rd-year undergraduate at Computer Science and Engineering Department, University of Moratuwa."
        ]}
        speed={100}
        eraseDelay={2000}
        displayTextRenderer={(text, i) => {
          return (
            <Typography variant="h6" component="p" sx={{ mt: 2, maxWidth: '600px' }}>
              {text}
            </Typography>
          );
        }}
      />
      <Button
        variant="outlined"
        sx={{ mt: 4, color: 'white', borderColor: 'white' }}
        href="/projects"
      >
        Check My Work
      </Button>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <IconButton 
          sx={{ color: 'white' }}
          href="https://facebook.com/LakshaniManamperi"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          sx={{ color: 'white' }}
          href="https://instagram.com/lakshanimana_" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton 
          sx={{ color: 'white' }}
          href="https://github.com/LRManamperi"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          sx={{ color: 'white' }}
          href="https://www.linkedin.com/in/lakshani-m-0032aa240/"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
