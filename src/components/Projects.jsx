import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Link } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ProjectImg from '../assets/pexels-goumbik-574080.jpg';

const projects = [
  {
    title: 'Nano Processor',
    description: 'A project implementing a simple nano processor. This project focuses on the fundamentals of processor architecture and provides a hands-on experience with hardware design and simulation.',
    link: 'https://github.com/LRManamperi/Nano-Processor'
  },
  {
    title: 'Banking System',
    description: 'A comprehensive banking system application. It includes features such as account management, transaction processing, and customer service automation.',
    link: 'https://github.com/NirukshaSandeepa/Banking-System'
  },
  {
    title: 'Personal Blog',
    description: 'A personal blog to share ideas and thoughts. This platform allows users to post articles, comment on them, and follow their favorite authors.',
    link: 'https://github.com/LRManamperi/Blog'
  },
  {
    title: 'Book Store Web Application',
    description: 'An online book store application. This project offers a complete solution for managing book inventory, processing orders, and handling customer queries.',
    link: 'https://github.com/LRManamperi/Book-Store'
  },
  {
    title: 'To Do App',
    description: 'A simple and effective to-do list application. This tool helps users organize their tasks, set deadlines, and track their progress.',
    link: 'https://github.com/LRManamperi/To-Do-App'
  }
];

const Projects = () => {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 10,
        textAlign: 'center',
        backgroundImage: `url(${ProjectImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1,
        },
      }}
    >
      <Typography variant="h4" component="h2" sx={{ color: 'primary.light', mb: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.9)', border: 1, borderColor: 'divider' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" sx={{ color: 'text.primary' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mt: 2, mb: 2, color: 'text.secondary' }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" component="p">
                  <Link href={project.link} underline="none" color="secondary">
                    View Project
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
