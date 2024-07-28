import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import Info from '../payment/Info';
import InfoMobile from '../payment/InfoMobile';
import PaymentForm from '../payment/PaymentForm';
import Review from '../payment/Review';

const steps = ['Payment details', 'Review your order'];

const logoStyle = {
  width: '140px',
  height: '56px',
  marginLeft: '-4px',
  marginRight: '-8px',
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [mode, setMode] = React.useState('light');
  const checkoutTheme = createTheme({ palette: { mode } });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={checkoutTheme}>
      <CssBaseline />
      <Grid container sx={{ height: { xs: '100%', sm: '100vh' } }}>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 4,
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              height: 150,
            }}
          >
              <Button
              startIcon={<ArrowBackRoundedIcon />}
              component="a"
              href="/material-ui/getting-started/templates/landing-page/"
              sx={{ ml: '-8px' }}
            >
              Back to SportsZone
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Info totalPrice={activeStep >= 1 ? '$144.97' : '$134.98'} />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                component="a"
                href="/material-ui/getting-started/templates/landing-page/"
                sx={{ alignSelf: 'start' }}
              >
                Back to
                <img
                  src={
                    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                  }
                  style={logoStyle}
                  alt="SportsZone"
                />
              </Button>
            </Box>
          </Box>
          <Card
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                ':last-child': { pb: 2 },
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>
                <Typography variant="body1">
                  {activeStep >= 1 ? '$144.97' : '$134.98'}
                </Typography>
              </div>
              <InfoMobile totalPrice={activeStep >= 1 ? '$144.97' : '$134.98'} />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              flexGrow: 1,
            }}
          >
            {getStepContent(activeStep)}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: 600,
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              startIcon={
                !(
                  activeStep === 0 || (activeStep === 1 && mode === 'rtl')
                ) ? (
                  <ChevronLeftRoundedIcon />
                ) : undefined
              }
            >
              Back
            </Button>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={handleNext}
                endIcon={
                  activeStep !== steps.length - 1 &&
                  !(
                    activeStep === 1 && mode === 'rtl'
                  ) ? (
                    <ChevronRightRoundedIcon />
                  ) : undefined
                }
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
