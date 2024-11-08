import { type FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useModalState from '../../Hooks/useModalState';
import QuizDialog from './QuizDialog/QuizDialog';
import React from 'react';

const MainPage: FC = () => {
  const { open, openModal, clouseModal } = useModalState(false);

  return (
    <React.Fragment>
      <Box
        id="main"
        sx={{
          top: -25,
          height: 25,
          width: 1,
        }}
      />
      <Box
        sx={{
          maxWidth: '100%',
          marginTop: 10,
          marginLeft: 2,
          marginRight: 2,
          paddingTop: 2,
          align: 'center',
          height: 500,
        }}
      >
        <Typography variant="h4" mt="5" align="center" mb="10">
          Главная
        </Typography>

        <Button variant="contained" onClick={openModal}>
          Квиз
        </Button>
      </Box>
      <QuizDialog open={open} cancel={clouseModal} />
    </React.Fragment>
  );
};

export default MainPage;
