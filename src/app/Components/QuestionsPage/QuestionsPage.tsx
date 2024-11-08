import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import CustomizedAccordions from '../Accordion/Accordion';
import React from 'react';

const QuestionsPage: FC = () => (
  <React.Fragment>
    <Box
      sx={{
        top: -25,
        height: 25,
        width: 1,
      }}
      id="questions"
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
        Ответы на вопросы
      </Typography>
      <CustomizedAccordions />
    </Box>
  </React.Fragment>
);

export default QuestionsPage;
