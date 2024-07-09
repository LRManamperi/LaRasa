import React from 'react';
import { Typography, Box, Divider, Container, Card, CardContent, IconButton, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import profilePicture from '../assets/profilePicture.jpg'; 
import backgroundImage from '../assets/pexels-padrinan-2882509.jpg';

const Portfolio = () => {
  return (
    <Container 
      sx={{ 
        pt: 8, 
        pb: 10, 
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the image
        color: 'white', // Ensure text is readable on the background
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        minHeight: '100vh', // Ensure it covers the full viewport height
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar 
          src={profilePicture} 
          sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
        />
        <Typography variant="h4" component="h2">
          Lakshani Rasanjali Manamperi
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: '600px', mx: 'auto' }}>
          3rd-year undergraduate at the University of Moratuwa.
        </Typography>
      </Box>

      <Section title="Academic Qualifications" icon={<SchoolIcon />}>
        <ContentBox>
          <Typography variant="body1">
            Undergraduate, B.Sc Engineering (Hons) (Computer Science & Engineering), University of Moratuwa, Sri Lanka
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            General Certificate Exam Advanced Level, Physical sciences stream, Sri Lanka - 3A’s, Z Score: 2.4308, Common General Test: 70% (2020)
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            General Certificate Exam Ordinary Level, Sri Lanka - 9A’s (2017)
          </Typography>
        </ContentBox>
      </Section>

      <Section title="Professional Activities" icon={<WorkIcon />}>
        <ContentBox>
          <Typography variant="body1">Member, Rotaract Club, University of Moratuwa</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Senior Prefect, Badulla Central College</Typography>
        </ContentBox>
      </Section>

      <Section title="Volunteering Activities" icon={<VolunteerActivismIcon />}>
        <ContentBox>
          <Typography variant="body1">Organizing Committee Member, EXMO’23 organized by University of Moratuwa</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Member, Sasnaka Sansada</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>FEXTX 4.0 - Organized by IEEE student branch of University of Moratuwa</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Voice Donation Camp - Organized by Rotaract Club of University of Moratuwa</Typography>
        </ContentBox>
      </Section>

      <Section title="Projects" icon={<CodeIcon />}>
        <ContentBox>
          <Typography variant="body1">
            <a href="https://github.com/LRManamperi/Nano-Processor" style={{ color: 'inherit' }}>Nano Processor</a>
          </Typography>
          <Typography variant="body1">
            <a href="https://github.com/NirukshaSandeepa/Banking-System" style={{ color: 'inherit' }}>Banking System</a>
          </Typography>
          <Typography variant="body1">
            <a href="https://github.com/LRManamperi/Blog" style={{ color: 'inherit' }}>Personal Blog</a>
          </Typography>
          <Typography variant="body1">
            <a href="https://github.com/LRManamperi/Book-Store" style={{ color: 'inherit' }}>Book Store Web Application</a>
          </Typography>
          <Typography variant="body1">
            <a href="https://github.com/LRManamperi/To-Do-App" style={{ color: 'inherit' }}>To Do App</a>
          </Typography>
        </ContentBox>
      </Section>

      <Section title="Skills" icon={<BuildIcon />}>
        <ContentBox>
          <Typography variant="body1">C/C++</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Python</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Java</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>SQL</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>VHDL</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>HTML</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>MS Office</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Decision making</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Problem Solving</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Adaptability</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>Communication and Collaboration</Typography>
        </ContentBox>
      </Section>
    </Container>
  );
};

const Section = ({ title, icon, children }) => (
  <Box sx={{ mb: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <IconButton sx={{ color: 'white' }}>
        {icon}
      </IconButton>
      <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </Box>
    {children}
    <Divider sx={{ mt: 2, backgroundColor: 'white' }} />
  </Box>
);

const ContentBox = ({ children }) => (
  <Card variant="outlined" sx={{ mb: 2, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export default Portfolio;
