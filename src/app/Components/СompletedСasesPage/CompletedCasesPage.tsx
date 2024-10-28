import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

const CompletedCasesPage: FC = () => (
  <Box
    id="cases"
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
      Завершенные дела
    </Typography>
  </Box>
);

export default CompletedCasesPage;
