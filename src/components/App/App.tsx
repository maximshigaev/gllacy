import { FC } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

// Components
import { MainPage } from '../';

export const App: FC = () => (
  <Routes>
    <Route path={`/`} element={<MainPage />} />
  </Routes>
);
