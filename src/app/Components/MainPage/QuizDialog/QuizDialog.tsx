import Dialog from '@mui/material/Dialog/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { FC, useContext } from 'react';
import QuizBody from './QuizBody/QuizBody';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import quizItems, {
  IFormInput,
} from '../../QuizStateContextProvider/initialItems';
import { QuizStateContext } from '../../QuizStateContextProvider/context';
import FormDataToHTML from './FormDataToHTML';
import axios from 'axios';
import SendMailMessage from '../../SendMailMessage/SendMailMessage';

const QuizDialog: FC<{ open: boolean; cancel: () => void }> = ({
  open,
  cancel,
}) => {
  const {
    handleReset,
    openMailMessage,
    succesMessage,
    errorMessage,
    startLoading,
    stopLoading,
    dialogMessage,
    loading,
  } = useContext(QuizStateContext);
  const methods = useForm<IFormInput>({
    defaultValues: {
      checkBoxes1: {
        apartment: false,
        land: false,
        car: false,
        otherProperty: false,
        none: false,
      },
      checkBoxes2: {
        mfo: false,
        carLoan: false,
        kingLoan: false,
        bailiff: false,
        privateLoans: false,
        other: false,
      },
      radioButtons1: {
        options: '',
      },
      radioButtons2: {
        options: '',
      },
      radioButtons3: {
        options: '',
      },
      radioButtons4: {
        options: '',
      },
      radioButtons5: {
        options: '',
      },
      radioButtons6: {
        options: '',
      },
      textFields1: {
        name: '',
        phone: '',
        email: '',
      },
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const to: string = 'kaptelinin1964.1@yandex.ru';
    const subject: string = 'Заявка с сайта';
    const htmlContent: string = FormDataToHTML(
      data,
      quizItems,
      'Заявка с квиза',
    );
    cancel();
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
    } catch (error) {
      stopLoading();
      errorMessage();
      openMailMessage();
      console.error(error);
    }

    handleReset();
  };

  return (
    <>
      <Dialog open={open} onClose={cancel}>
        <DialogContent>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Box
                sx={{
                  overflowX: 'hidden',
                  width: 550,
                  height: 350,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <QuizBody />
              </Box>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SendMailMessage text={dialogMessage} />
    </>
  );
};

export default QuizDialog;
