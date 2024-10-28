import Box from '@mui/material/Box/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const QuizItemCheckboxList: FC<{
  currentMap: Map<string, string>;
  partitionKey: number;
}> = ({ currentMap, partitionKey }) => {
  const { control } = useFormContext();

  const items = Array.from(currentMap.entries()).map(([key, value]) => (
    <FormControlLabel
      key={key}
      control={
        <Controller
          name={`checkBoxes${partitionKey}.${key}`}
          control={control}
          render={({ field }) => (
            <Checkbox {...field} checked={!!field.value} />
          )}
        />
      }
      label={value}
    />
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

export default QuizItemCheckboxList;
