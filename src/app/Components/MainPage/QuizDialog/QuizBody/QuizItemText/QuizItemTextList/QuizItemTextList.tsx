import quizItems from '@/app/Components/QuizStateContextProvider/initialItems';
import Box from '@mui/material/Box/Box';
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const QuizItemTextList: FC<{
  index: number;
  currentMap: Map<string, string>;
}> = ({ index, currentMap }) => {
  const { control } = useFormContext();

  const items = Array.from(currentMap.entries()).map(([key, value]) => (
    <React.Fragment key={key}>
      <Typography>{value}</Typography>
      <Controller
        name={`textFields${quizItems[index].partitionKey}.${key}`}
        control={control}
        render={({ field }) => {
          return <TextField {...field} variant="outlined" size="small" />;
        }}
      />
    </React.Fragment>
  ));

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      />
      {items}
      <Box />
    </>
  );
};

export default QuizItemTextList;
