import { FC } from 'react';
import MainPage from '../MainPage/MainPage';
import InformPage from '../InformPage/IformPage';
import RewiewsPage from '../ReviewsPage/ReviewsPage';
import CompletedCasesPage from '../СompletedСasesPage/CompletedCasesPage';
import ContactsPage from '../ContactsPage/ContactsPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';

const RootRoutes: FC = () => (
  <>
    <MainPage />
    <InformPage />
    <CompletedCasesPage />
    <RewiewsPage />
    <QuestionsPage />
    <ContactsPage />
  </>
);
export default RootRoutes;
