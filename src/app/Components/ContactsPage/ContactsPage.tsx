import type { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InputContacts from './InputContacts/InputContacts';

const ContactsPage: FC = () => (
  <Box
    id="contacts"
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
);

export default ContactsPage;
