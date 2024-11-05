import { FC, ReactNode, createContext, useState } from 'react';
import quizItems from './initialItems';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const QuizStateContext = createContext<ITodosStateContext>({
  currentPage: 0,
  dialogOpen: false,
  dialogMessage: '',
  loading: false,
  handleNext: (): void => {},
  handlePrev: (): void => {},
  handleReset: (): void => {},
  openMailMessage: (): void => {},
  closeMailMessage: (): void => {},
  errorMessage: (): void => {},
  succesMessage: (): void => {},
  startLoading: (): void => {},
  stopLoading: (): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

interface ITodosStateContext {
  currentPage: number;
  dialogOpen: boolean;
  dialogMessage: string;
  loading: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handleReset: () => void;
  openMailMessage: () => void;
  closeMailMessage: () => void;
  errorMessage: () => void;
  succesMessage: () => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const QuizStateContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (currentPage < quizItems.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentPage(0);
  };

  const openMailMessage = () => {
    setDialogOpen(true);
  };

  const closeMailMessage = () => {
    setDialogOpen(false);
  };

  const errorMessage = () => {
    setDialogMessage('Ошибка. Попробуйте позже.');
  };

  const succesMessage = () => {
    setDialogMessage('Благодарим Вас. Скоро с Вами свяжется специалист.');
  };

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <QuizStateContext.Provider
      value={{
        currentPage,
        dialogOpen,
        dialogMessage,
        loading,
        handleNext,
        handlePrev,
        handleReset,
        openMailMessage,
        closeMailMessage,
        errorMessage,
        succesMessage,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </QuizStateContext.Provider>
  );
};

export default QuizStateContextProvider;
