import { FC } from 'react';

// Components
import {
  Header,
  Offers,
  Promotions,
  Assortment,
  Advantages,
  News,
} from '../';

export const MainPage: FC = () => (
  <>
    <Header />
    <main>
      <h1 className="visually-hidden">Магазин мороженого Глэйси</h1>
      <Offers />
      <Promotions />
      <Assortment />
      <Advantages />
      <News />
    </main>
  </>
);
