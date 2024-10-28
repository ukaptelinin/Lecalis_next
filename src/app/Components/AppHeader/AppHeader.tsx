import type { FC } from 'react';
import { AppBar, Box } from '@mui/material';
import Navigation from './Navigation/Navigation';

const AppHeader: FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Navigation />
    </AppBar>
  </Box>
);

export default AppHeader;
