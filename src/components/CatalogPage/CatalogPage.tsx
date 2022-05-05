import { FC } from 'react';

// Components
import {
  Header,
  Filters,
} from '../';

// Styles
import './catalogPage.scss';

// Types
import { TCartItem } from '../../types';

// Constants
import { routes } from '../../constants';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  currentTopOfferId: number;
}

export const CatalogPage: FC<TProps> = ({ cartItems, deleteCartItem, currentTopOfferId }) => (
  <div className={`page__wrapper page__wrapper--catalog page__wrapper--slide-${currentTopOfferId}`}>
    <div className="page__container">
      <Header cartItems={cartItems} deleteCartItem={deleteCartItem} />
      <main>
        <h1 className="visually-hidden">Каталог продукции</h1>
        <ul className="catalog-page__breadcrumbs">
          <li className="catalog-page__breadcrumb">
            <a
              className="catalog-page__breadcrumbs-link"
              title="Главная"
              href={routes.mainPage}
            >
              Главная
            </a>
          </li>
          <li className="catalog-page__breadcrumb">
            <a
              className="catalog-page__breadcrumbs-link"
              title="Каталог"
              href="#"
            >
              Каталог
            </a>
          </li>
          <li className="catalog-page__breadcrumb">
            <a
              className="catalog-page__breadcrumbs-link catalog-page__breadcrumbs-link--current"
              title="Сливочное"
              href="#"
            >
              Сливочное
            </a>
          </li>
        </ul>
        <h2 className="catalog-page__title">Сливочное мороженое</h2>
        <Filters />
      </main>
    </div>
  </div>
);
