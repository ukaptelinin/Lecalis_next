import Button from '@mui/material/Button/Button';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import { FC, useContext } from 'react';
import { QuizStateContext } from '../QuizStateContextProvider/context';

const SendMailMessage: FC<{
  text: string;
}> = ({ text }) => {
  const { dialogOpen, closeMailMessage } = useContext(QuizStateContext);
  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={closeMailMessage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ backgroundColor: 'green' }}>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'green' }}>
          <Button onClick={closeMailMessage} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SendMailMessage;
