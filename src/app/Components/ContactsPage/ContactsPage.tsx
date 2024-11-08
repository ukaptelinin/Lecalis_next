import type { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InputContacts from './InputContacts/InputContacts';
import React from 'react';

const ContactsPage: FC = () => (
  <React.Fragment>
    <Box
      id="contacts"
      sx={{
        top: -25,
        height: 25,
        width: 1,
      }}
    />
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        maxWidth: '100%',
        margin: 2,
        paddingTop: 2,
        align: 'center',
      }}
    >
      <Typography variant="h4" align="center">
        Контакты
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} alignItems="center">
          <Typography variant="h5" align="center">
            Контакты
          </Typography>
        </Grid>
        <Grid item xs={6} alignItems="center">
          <Typography variant="h5" align="center">
            Запишитесь на консультацию
          </Typography>
          <InputContacts />
        </Grid>
      </Grid>
    </Box>
  </React.Fragment>
);

export default ContactsPage;
