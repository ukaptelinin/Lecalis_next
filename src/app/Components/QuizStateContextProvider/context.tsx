import { FC, ReactNode, createContext, useState } from 'react';
import quizItems from './initialItems';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const QuizStateContext = createContext<ITodosStateContext>({
  currentPage: 0,
  handleNext: (): void => {},
  handlePrev: (): void => {},
  handleReset: (): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

interface ITodosStateContext {
  currentPage: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleReset: () => void;
}

const QuizStateContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <QuizStateContext.Provider
      value={{
        currentPage,
        handleNext,
        handlePrev,
        handleReset,
      }}
    >
      {children}
    </QuizStateContext.Provider>
  );
};

export default QuizStateContextProvider;
