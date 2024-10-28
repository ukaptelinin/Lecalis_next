import type { FC } from 'react';
import { Box } from '@mui/material';

const AppFooter: FC = () => (
  <Box
    sx={{
      flexGrow: 1,
      maxWidth: '100%',
      height: 80,
      backgroundColor: 'black',
    }}
  ></Box>
);

export default AppFooter;
