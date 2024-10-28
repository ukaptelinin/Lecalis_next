/* eslint-disable @typescript-eslint/no-unused-vars */
import Typography from '@mui/material/Typography/Typography';
import { FC, useContext, useEffect } from 'react';
import Box from '@mui/material/Box/Box';
import quizItems from '../../../QuizStateContextProvider/initialItems';
import QuizItemCheckbox from './QuizItemCheckbox/QuizItemCheckbox';
import QuizItemRadio from '../QuizItemRadio/QuizItemRadio';
import QuizItemText from './QuizItemText/QuizItemText';
import { QuizStateContext } from '../../../QuizStateContextProvider/context';
import styled from '@mui/material/styles/styled';
import { useSpringCarousel } from 'react-spring-carousel';
import useModalState from '../../../../Hooks/useModalState';
import { useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button/Button';

const QuizBody: FC = () => {
  const { currentPage, handleNext, handlePrev, handleReset } =
    useContext(QuizStateContext);
  const { open } = useModalState(false);

  const { reset } = useFormContext();

  useEffect(() => {
    if (!open) {
      reset();
      handleReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const renderComponent = (componentKey: string, index: number) => {
    switch (componentKey) {
      case 'CHECKBOX':
        return <QuizItemCheckbox index={index} />;
      case 'RADIO':
        return <QuizItemRadio index={index} />;
      case 'TEXT':
        return <QuizItemText index={index} />;
      default:
        return <div>Unknown component</div>;
    }
  };

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: quizItems.map((i, index) => ({
        id: i.id,
        renderItem: (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Typography variant="h6" color="blue" align="center">
              {i.title}
            </Typography>
            {renderComponent(i.pageType, index)}
          </Box>
        ),
      })),
    });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {carouselFragment}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="contained" onClick={slideToPrevItem}>
          Назад
        </Button>
        <Button variant="contained" onClick={slideToNextItem}>
          Вперед
        </Button>
      </Box>
    </Box>
  );
};

export default QuizBody;
