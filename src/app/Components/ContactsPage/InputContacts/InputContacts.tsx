import { useContext, type FC } from 'react';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ConsultFormInput } from '../../QuizStateContextProvider/initialItems';
import axios from 'axios';
import SendMailMessage from '../../SendMailMessage/SendMailMessage';
import { QuizStateContext } from '../../QuizStateContextProvider/context';

const InputContacts: FC = () => {
  const {
    openMailMessage,
    succesMessage,
    errorMessage,
    startLoading,
    stopLoading,
    dialogMessage,
    loading,
  } = useContext(QuizStateContext);

  const getPhoneValidationRules = () => {
    return {
      required: 'Не верный номер',
      pattern: {
        value: /^\+7\d{10}$/,
        message: 'Введите номер в формате: +79287778899',
      },
    };
  };

  const getNameValidationRules = () => {
    return {
      required: 'Не введено имя',
    };
  };

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
    const htmlContent: string = `<html><body><h2>Заявка на консультацию</h2><p>Имя: ${data.userFields.userName}</p><p>Телефон: ${data.userFields.userPhone}</p></body></html>`;
    startLoading();
    try {
      const response = await axios.post('/api/send-email', {
        to,
        subject,
        htmlContent,
      });

      console.log(response.data);
      stopLoading();
      succesMessage();
      openMailMessage();
      reset();
    } catch (error) {
      stopLoading();
      errorMessage();
      openMailMessage();
      console.error(error);
      reset();
    }
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
          rules={getNameValidationRules()}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              variant="outlined"
              size="medium"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : null}
            />
          )}
        />
        <Typography variant="h6">Номер телефона</Typography>
        <Controller
          name="userFields.userPhone"
          control={control}
          rules={getPhoneValidationRules()}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              placeholder="+79998887766"
              variant="outlined"
              size="medium"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : null}
            />
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SendMailMessage text={dialogMessage} />
    </form>
  );
};

export default InputContacts;
