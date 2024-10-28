import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

const InformPage: FC = () => (
  <Box
    id="inform"
    sx={{
      flexGrow: 1,
      maxWidth: '100%',
      margin: 2,
      paddingTop: 2,
      align: 'center',
      height: 500,
    }}
  >
    <Typography variant="h4" align="center">
      О нас
    </Typography>
  </Box>
);

export default InformPage;
