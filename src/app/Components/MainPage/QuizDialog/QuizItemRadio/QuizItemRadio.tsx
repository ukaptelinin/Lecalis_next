import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import quizItems from '../../../QuizStateContextProvider/initialItems';
import Box from '@mui/material/Box/Box';
import QuizItemRadioList from './QuizItemRadioList/QuizItemRadioList';

const QuizItemRadio: FC<{ index: number }> = ({ index }) => {
  const { control } = useFormContext();
  return (
    <Box width="100%">
      <Controller
        name={`radioButtons${quizItems[index].partitionKey}.options`}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <QuizItemRadioList currentMap={quizItems[index].mapLabels} />
          </RadioGroup>
        )}
      />
    </Box>
  );
};

export default QuizItemRadio;
