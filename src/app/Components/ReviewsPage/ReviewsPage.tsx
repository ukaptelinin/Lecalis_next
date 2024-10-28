import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

const RewiewsPage: FC = () => (
  <Box
    id="reviews"
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
      Отзывы
    </Typography>
  </Box>
);

export default RewiewsPage;
