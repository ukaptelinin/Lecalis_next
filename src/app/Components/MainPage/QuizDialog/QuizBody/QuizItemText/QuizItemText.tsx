import { FC } from 'react';
import quizItems from '../../../../QuizStateContextProvider/initialItems';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import React from 'react';
import QuizItemTextList from './QuizItemTextList/QuizItemTextList';

const QuizItemText: FC<{ index: number }> = ({ index }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <QuizItemTextList currentMap={quizItems[index].mapLabels} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: '20%', alignSelf: 'center' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default QuizItemText;
