import { FC } from 'react';

// Components
import { Header } from '../';

// Styles
import './catalogPage.scss';

// Types
import { TCartItem } from '../../types';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  currentTopOfferId: number;
  setCurrentTopOfferId: (id: number) => void;
}

export const CatalogPage: FC<TProps> = ({ cartItems, deleteCartItem, currentTopOfferId, setCurrentTopOfferId }) => (
  <div className={`page__wrapper page__wrapper--slide-${currentTopOfferId}`}>
    <div className="page__container">
      <Header cartItems={cartItems} deleteCartItem={deleteCartItem} />
    </div>
  </div>
);
