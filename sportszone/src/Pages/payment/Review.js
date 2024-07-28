import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const tournamentDetails = [
  { name: 'Plan', detail: 'Professional Plan' },
  { name: 'Monthly subscription', detail: '$25.00' },
  { name: 'Priority support', detail: 'Included - Free' },
  { name: 'Hardware', detail: '$99.99' },
  { name: 'Landing page template', detail: '$69.99' },
];

export default function Review() {
  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Tournament Details" />
          <Typography variant="body2">Professional Plan</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Cost" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $264.97
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Tournament Pricing Details
          </Typography>
          <Grid container>
            {tournamentDetails.map((detail) => (
              <React.Fragment key={detail.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {detail.name}
                  </Typography>
                  <Typography variant="body2">{detail.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
