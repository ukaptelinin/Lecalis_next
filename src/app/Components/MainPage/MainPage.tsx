import { type FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useModalState from '../../Hooks/useModalState';
import QuizDialog from './QuizDialog/QuizDialog';

const MainPage: FC = () => {
  const { open, openModal, clouseModal } = useModalState(false);

  return (
    <>
      <Box
        id="main"
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
    </>
  );
};

export default MainPage;
