import type { FC } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ConsultFormInput } from '../../QuizStateContextProvider/initialItems';
import axios from 'axios';

const InputContacts: FC = () => {
  const { handleSubmit, control, reset } = useForm<ConsultFormInput>({
    defaultValues: {
      userFields: {
        userName: '',
        userPhone: '',
      },
    },
  });
  const onSubmit: SubmitHandler<ConsultFormInput> = async (data) => {
    console.log(data);
    const to: string = 'kaptelinin1964.1@yandex.ru';
    const subject: string = 'Заявка с сайта';
    const htmlContent: string = `<html><body><h4>Заявка на консультацию</h4><p>Имя: ${data.userFields.userName}</p><p>Телефон: ${data.userFields.userPhone}</p></body></html>`;

    try {
      const response = await axios.post('/api/send-email', {
        to,
        subject,
        htmlContent,
      });

      console.log(response.data);
      alert('Email sent successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
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
          name="userFields.userName"
          control={control}
          render={({ field }) => (
            <TextField {...field} variant="outlined" size="medium" />
          )}
        />
        <Typography variant="h6">Номер телефона</Typography>
        <Controller
          name="userFields.userPhone"
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
