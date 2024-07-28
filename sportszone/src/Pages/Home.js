import React, { useState } from 'react';
import { Button, Container, Typography, Stack, Grid, Paper, Box, Collapse } from '@mui/material';
import { blue, red, grey } from '@mui/material/colors';

const Home = () => {
  // State for managing dropdown visibility
  const [openParticipant, setOpenParticipant] = useState(false);
  const [openOrganizer, setOpenOrganizer] = useState(false);

  // Handle mouse enter and leave events
  const handleParticipantMouseEnter = () => {
    setOpenParticipant(true);
  };

  const handleParticipantMouseLeave = () => {
    setOpenParticipant(false);
  };

  const handleOrganizerMouseEnter = () => {
    setOpenOrganizer(true);
  };

  const handleOrganizerMouseLeave = () => {
    setOpenOrganizer(false);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
        <Typography variant="h1" gutterBottom sx={{ color: blue[900] }}>
          Welcome to SportsZone
        </Typography>
        <Typography variant="h5" sx={{ color: grey[700] }}>
          Your one-stop solution for managing sports tournaments.
        </Typography>
      </Box>

      <Stack spacing={4} alignItems="center">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 4, 
                borderRadius: 3, 
                textAlign: 'center', 
                backgroundColor: '#f9f9f9', 
                position: 'relative',
                '&:hover': {
                  cursor: 'pointer', // Change cursor to pointer on hover
                }
              }}
              onMouseEnter={handleParticipantMouseEnter}
              onMouseLeave={handleParticipantMouseLeave}
            >
              <Typography variant="h4" gutterBottom sx={{ color: blue[800] }}>
                For Participants
              </Typography>
              <Collapse in={openParticipant}>
                <Typography variant="body1" paragraph sx={{ color: grey[600] }}>
                  Access features and manage your participation with ease. Explore our portal to find everything you need for a great sports experience.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  sx={{ 
                    mt: 2, 
                    textTransform: 'none', 
                    transition: 'transform 0.3s ease, background-color 0.3s ease', 
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: blue[700], // Darker shade for hover effect
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow on hover
                      transform: 'scale(1.05)' // Slightly enlarge the button on hover
                    },
                    '&:active': {
                      transform: 'scale(0.95)', // Slightly shrink the button on click
                    }
                  }}
                >
                  Participant Portal
                </Button>
              </Collapse>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 4, 
                borderRadius: 3, 
                textAlign: 'center', 
                backgroundColor: '#f9f9f9', 
                position: 'relative',
                '&:hover': {
                  cursor: 'pointer', // Change cursor to pointer on hover
                }
              }}
              onMouseEnter={handleOrganizerMouseEnter}
              onMouseLeave={handleOrganizerMouseLeave}
            >
              <Typography variant="h4" gutterBottom sx={{ color: red[800] }}>
                For Organizers
              </Typography>
              <Collapse in={openOrganizer}>
                <Typography variant="body1" paragraph sx={{ color: grey[600] }}>
                  Manage tournaments, oversee events, and ensure everything runs smoothly. Our organizer portal provides all the tools you need.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  sx={{ 
                    mt: 2, 
                    textTransform: 'none', 
                    transition: 'transform 0.3s ease, background-color 0.3s ease', 
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: red[700], // Darker shade for hover effect
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow on hover
                      transform: 'scale(1.05)' // Slightly enlarge the button on hover
                    },
                    '&:active': {
                      transform: 'scale(0.95)', // Slightly shrink the button on click
                    }
                  }}
                >
                  Organizer Portal
                </Button>
              </Collapse>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Home;
