import FormGroup from '@mui/material/FormGroup/FormGroup';
import { FC } from 'react';
import quizItems from '../../../../QuizStateContextProvider/initialItems';
import Box from '@mui/material/Box/Box';
import QuizItemCheckboxList from './QuizItemCheckboxList/QuizItemCheckboxList';

const QuizItemCheckbox: FC<{ index: number }> = ({ index }) => {
  return (
    <Box width="100%">
      <FormGroup>
        <QuizItemCheckboxList
          currentMap={quizItems[index].mapLabels}
          partitionKey={quizItems[index].partitionKey}
        />
      </FormGroup>
    </Box>
  );
};

export default QuizItemCheckbox;
