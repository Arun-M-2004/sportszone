import React from 'react';
import { Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
import '../css/contact.css';  // Import the CSS file

const ContactUs = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflowX: 'hidden', // Ensure container fits horizontally
      }}
    >
      <Typography variant="h2" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" paragraph>
        "We’d love to hear from you! Whether you have questions, feedback, or need assistance with our sports tournament ecosystem, feel free to reach out to us. Our team is here to help you make the most of your SportsZone experience."
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            <LocationOnIcon className="icon" /> Location
          </Typography>
          
          <Typography variant="body1" paragraph>
            Visit us at our Coimbatore office located in Tamil Nadu 641006. We look forward to connecting with you!
            <br />
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener"
            >
              View on Google Maps
            </Link>
          </Typography>
          
          <Typography variant="h4" gutterBottom>
            <EmailIcon className="icon" /> Email
          </Typography>
          <Typography variant="body1" paragraph>
            For inquiries and support, please reach at <a href="mailto:business@amypo.in">office@gmail.in</a>. For management-related questions, contact us at <a href="mailto:career@amypo.com">management@gmail.com</a> or <a href="mailto:hr@amypo.com">SportsZone@gmail.com</a>.
          </Typography>

          <Typography variant="h4" gutterBottom>
            <PhoneIcon className="icon" /> Phone
          </Typography>
          <Typography variant="body1" paragraph>
            For office inquiries, please call us at <span className="phone-number">+91 23252 111 341</span>.<br />
            For HR-related matters, reach out at <span className="phone-number">+91 3i3932 9398</span>.
          </Typography>

          {/* Replacing Company section with Thank you message */}
          <Typography variant="h5" gutterBottom>
            Thank you for your time!
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>Contact Form</Typography>
          <form noValidate autoComplete="off">
            <TextField
              required
              id="email"
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="name"
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="jobTitle"
              label="Job Title"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="phoneNumber"
              label="Phone Number"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="message"
              label="Your Message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Message Us
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
