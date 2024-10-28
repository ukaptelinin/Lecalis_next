import type { FC } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { ConsultFormInput } from '../../QuizStateContextProvider/initialItems';

const InputContacts: FC = () => {
  const { handleSubmit, control, reset } = useForm<ConsultFormInput>({
    defaultValues: {
      personalInfo: {
        firstName: '',
        phone: '',
      },
    },
  });
  const onSubmit = (data: ConsultFormInput) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
        }}
      >
        <Typography variant="h6">Введите ваше имя</Typography>
        <Controller
          name="personalInfo.firstName"
          control={control}
          render={({ field }) => (
            <TextField {...field} variant="outlined" size="medium" />
          )}
        />
        <Typography variant="h6">Номер телефона</Typography>
        <Controller
          name="personalInfo.phone"
          control={control}
          render={({ field }) => (
            <TextField {...field} variant="outlined" size="medium" />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: '100%', alignSelf: 'center' }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default InputContacts;
