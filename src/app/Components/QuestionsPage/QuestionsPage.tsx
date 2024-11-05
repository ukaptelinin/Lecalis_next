import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import CustomizedAccordions from '../Accordion/Accordion';

const QuestionsPage: FC = () => (
  <>
    <Box
      id="questions"
      sx={{
        position: 'absolute',
        top: -120,
        height: 120,
        width: 1,
        visibility: 'hidden',
      }}
    />
    <Box
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
  </>
);

export default QuestionsPage;
