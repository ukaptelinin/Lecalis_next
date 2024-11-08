import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import React from 'react';

const CompletedCasesPage: FC = () => (
  <React.Fragment>
    <Box
      id="cases"
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
        height: 500,
      }}
    >
      <Typography variant="h4" align="center">
        Завершенные дела
      </Typography>
    </Box>
  </React.Fragment>
);

export default CompletedCasesPage;
