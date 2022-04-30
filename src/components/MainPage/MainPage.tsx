import {
  FC,
  useState,
} from 'react';

// Components
import {
  Header,
  Offers,
  Promotions,
  Assortment,
  Advantages,
  News,
  SubscriptionForm,
  Contacts,
  Footer,
} from '../';

// Styles
import './mainPage.scss';

// Types
import { TCartItem } from '../../types';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  currentTopOfferId: number;
  setCurrentTopOfferId: (id: number) => void;
}

export const MainPage: FC<TProps> = ({ cartItems, deleteCartItem , currentTopOfferId, setCurrentTopOfferId}) => (
  <div className={`page__wrapper page__wrapper--slide-${currentTopOfferId}`}>
    <div className={`page__container page__container--slide-${currentTopOfferId}`}>
      <Header cartItems={cartItems} deleteCartItem={deleteCartItem} />
      <main>
        <h1 className="visually-hidden">Магазин мороженого Глэйси</h1>
        <Offers currentTopOfferId={currentTopOfferId} setCurrentTopOfferId={setCurrentTopOfferId} />
        <Promotions />
        <Assortment />
        <Advantages />
        <div className="main-page__columns-wrapper">
          <News />
          <SubscriptionForm />
        </div>
        <Contacts />
      </main>
      <Footer />
    </div>
  </div>
);
