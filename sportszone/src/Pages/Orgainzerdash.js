// src/Pages/Orgainzerdash.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../css/Dashboard.css';
import Preloader from '../Components/Preloader.js';
import Footer from '../Components/Footer.js';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#000',
      paper: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: '#b0bec5',
    },
  },
});

const Orgainzerdash = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const username = 'John Doe'; // Example username

  useEffect(() => {
    if (loadingComplete) {
      setShowSection(true);
    }
  }, [loadingComplete]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    handleMenuClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loadingComplete && <Preloader setLoadingComplete={setLoadingComplete} />}
      {loadingComplete && (
        <>
          <AppBar position="fixed" className="appBar">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)} className="menuIcon">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="title">
                SportsZone
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" className="username">
                  {username}
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="profile" onClick={handleMenuOpen} className="profileButton">
                  <AccountCircleIcon />
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: '#0A0A0A',
                    color: '#fff',
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: '#0A0A0A',
                color: '#fff',
              },
            }}
            className="drawer"
          >
            <List sx={{ width: 250 }}>
              <ListItem button onClick={() => setDrawerOpen(false)} className="listItem">
                <ListItemIcon>
                  <CloseIcon className="closeIcon" />
                </ListItemIcon>
              </ListItem>
              <ListItem button component="a" href="/home" className="listItem">
                <ListItemText primary="Home" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/about-us" className="listItem">
                <ListItemText primary="About us" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/partner" className="listItem">
                <ListItemText primary="Partner With Us" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/membership-management" className="listItem">
                <ListItemText primary="Membership Management" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/book-now" className="listItem">
                <ListItemText primary="Book Now" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/news-events" className="listItem">
                <ListItemText primary="News and Events" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/careers" className="listItem">
                <ListItemText primary="Careers" className="listItemText" />
              </ListItem>
              <ListItem button component="a" href="/blogs" className="listItem">
                <ListItemText primary="Blogs" className="listItemText" />
              </ListItem>
            </List>
          </Drawer>
          <Box className="mainContent">
            <Box className={`new-section ${showSection ? 'fade-in' : ''}`}>
              <h2>Become a Tournament Organizer Today!</h2>
              <p>Shape the future of sports. Create your own tournament on SportsZone and connect with passionate athletes.</p>
              <button>Join our community of organizers and start your sports journey.</button>
            </Box>
          </Box>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default Orgainzerdash;
