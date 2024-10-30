import Dialog from '@mui/material/Dialog/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { FC, useContext } from 'react';
import QuizBody from './QuizBody/QuizBody';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import quizItems, {
  IFormInput,
} from '../../QuizStateContextProvider/initialItems';
import { QuizStateContext } from '../../QuizStateContextProvider/context';
import FormDataToHTML from './FormDataToHTML';
import axios from 'axios';

const QuizDialog: FC<{ open: boolean; cancel: () => void }> = ({
  open,
  cancel,
}) => {
  const { handleReset } = useContext(QuizStateContext);
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
      textFields: {
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
    /*const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html',
      },
      body: JSON.stringify({
        subject: 'Заявка с сайта',
        htmlContent: { htmlData },
      }),
    });
    console.log(response.body);
    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }*/
    cancel();
    handleReset();
  };

  return (
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
  );
};

export default QuizDialog;
