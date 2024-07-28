import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { SportsSoccer as SportsSoccerIcon, Group as GroupIcon, Star as StarIcon } from '@mui/icons-material';
import '../css/about.css'; // Import the CSS file
import Footer from '../Components/Footer.js';

const AboutUs = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: ' #09a740',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          overflowX: 'hidden', // Ensure container fits horizontally
        }}
      >
        <Typography variant="h2" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          At SportsZone, we are passionate about sports and dedicated to creating a thriving community for athletes and fans alike.SportsZone is a dynamic platform designed to revolutionize the way sports tournaments are organized and experienced. By connecting passionate athletes, dedicated organizers, and enthusiastic fans, we aim to create a thriving sports community. Our platform offers a comprehensive suite of tools to streamline tournament management, from registration and scheduling to live scoring and results. Whether you're an avid player looking for your next challenge or an organizer seeking to create unforgettable events, SportsZone is your ultimate sports companion.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to empower athletes, connect fans, and foster a love for sports. We believe in fair play, inclusivity, and excellence.Our mission is to empower athletes, connect fans, and foster a love for sports. We believe in fair play, inclusivity, and excellence. Through our platform, we aim to build a thriving sports community where everyone feels welcome and inspired.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is composed of experienced sports enthusiasts who are committed to providing an exceptional platform for sports management and engagement.
          We are proud to support local sports by organizing community tournaments, sponsoring local teams, and promoting grassroots sports development.
        </Typography> 
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
