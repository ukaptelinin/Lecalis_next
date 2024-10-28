import Box from '@mui/material/Box/Box';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Radio from '@mui/material/Radio/Radio';
import { FC } from 'react';

const QuizItemRadioList: FC<{ currentMap: Map<string, string> }> = ({
  currentMap,
}) => {
  const items = Array.from(currentMap.entries()).map(([key, value]) => (
    <FormControlLabel key={key} value={key} control={<Radio />} label={value} />
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

export default QuizItemRadioList;
