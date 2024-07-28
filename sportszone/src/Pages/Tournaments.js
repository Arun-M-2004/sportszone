import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  ThemeProvider,
  createTheme,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  InputAdornment,
  Box,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SearchIcon from '@mui/icons-material/Search';

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
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#fff',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#fff',
    },
    body1: {
      fontSize: '1rem',
      color: '#b0bec5',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#b0bec5',
    },
  },
});

export default function Dashboard() {
  const [filters, setFilters] = useState({
    location: '',
    sport: '',
    gender: '',
    teamCount: '',
    searchQuery: '',
  });

  const tournaments = [
    {
      name: 'Football Championship',
      status: '12 Teams Confirmed',
      date: 'Aug 20, 2024',
      time: '10:00 AM',
      location: 'New York',
      sport: 'Football',
      gender: 'Male',
      teamCount: 'Group',
    },
    {
      name: 'Basketball Tournament',
      status: '10 Teams Confirmed',
      date: 'Sep 15, 2024',
      time: '2:00 PM',
      location: 'Los Angeles',
      sport: 'Basketball',
      gender: 'Female',
      teamCount: 'Group',
    },
    {
      name: 'Volleyball League',
      status: '8 Teams Confirmed',
      date: 'Oct 10, 2024',
      time: '5:00 PM',
      location: 'Miami',
      sport: 'Volleyball',
      gender: 'Mixed',
      teamCount: 'Single',
    },
  ];

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const filteredTournaments = tournaments.filter((tournament) =>
    (!filters.searchQuery || tournament.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
    (!filters.location || tournament.location.includes(filters.location)) &&
    (!filters.sport || tournament.sport === filters.sport) &&
    (!filters.gender || tournament.gender === filters.gender) &&
    (!filters.teamCount || tournament.teamCount === filters.teamCount)
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <SportsSoccerIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sports Tournament Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ mr: 2 }}>
              <TextField
                label="Search"
                name="searchQuery"
                variant="outlined"
                value={filters.searchQuery}
                onChange={handleFilterChange}
                size="small"
                InputLabelProps={{ style: { color: '#b0bec5' } }}
                InputProps={{
                  style: { color: '#fff' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon style={{ color: '#b0bec5' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl sx={{ mr: 2 }}>
              <TextField
                label="Location"
                name="location"
                variant="outlined"
                value={filters.location}
                onChange={handleFilterChange}
                size="small"
                InputLabelProps={{ style: { color: '#b0bec5' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
            </FormControl>
            <FormControl sx={{ mr: 2 }}>
              <InputLabel sx={{ color: '#b0bec5' }}>Sport</InputLabel>
              <Select
                name="sport"
                value={filters.sport}
                onChange={handleFilterChange}
                style={{ color: '#fff' }}
                size="small"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Football">Football</MenuItem>
                <MenuItem value="Basketball">Basketball</MenuItem>
                <MenuItem value="Volleyball">Volleyball</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mr: 2 }}>
              <InputLabel sx={{ color: '#b0bec5' }}>Gender</InputLabel>
              <Select
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
                style={{ color: '#fff' }}
                size="small"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Mixed">Mixed</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset" sx={{ mr: 2 }}>
              <RadioGroup
                row
                name="teamCount"
                value={filters.teamCount}
                onChange={handleFilterChange}
                sx={{ color: '#fff' }}
              >
                <FormControlLabel value="Single" control={<Radio />} label="Single" />
                <FormControlLabel value="Group" control={<Radio />} label="Group" />
              </RadioGroup>
            </FormControl>
            <Button color="inherit" sx={{ mr: 2 }}>All Events</Button>
            <Link href="#" color="inherit" underline="none">
              <Button color="inherit">Logout</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Booked Tournaments
        </Typography>
        <Grid container spacing={2}>
          {filteredTournaments.map((tournament, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {tournament.name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Status: {tournament.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {tournament.date} | Time: {tournament.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {tournament.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sport: {tournament.sport} | Gender: {tournament.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Team Count: {tournament.teamCount}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
