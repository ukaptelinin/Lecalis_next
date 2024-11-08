import { FC } from 'react';
import RootRoutes from '../Components/RootRoutes/RootRoutes';
import AppHeader from '../Components/AppHeader/AppHeader';
import AppFooter from '../Components/AppFooter/AppFooter';
import QuizStateContextProvider from '../Components/QuizStateContextProvider/context';

const App: FC = () => (
  <QuizStateContextProvider>
    <AppHeader />
    <RootRoutes />
    <AppFooter />
  </QuizStateContextProvider>
);

export default App;
