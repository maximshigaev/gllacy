import {
  FC,
  useState,
  useCallback,
  useEffect,
} from 'react';

// Components
import {
  Header,
  Filters,
  Catalog,
} from '../';

// Styles
import './catalogPage.scss';

// Types
import {
  TCartItem,
  TCurrentFilters,
} from '../../types';

// Constants
import {
  routes,
  catalogItems,
} from '../../constants';

// Helpers
import { getRenderedCatalogItems } from '../../helpers';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  currentTopOfferId: number;
}

export const CatalogPage: FC<TProps> = ({ cartItems, deleteCartItem, currentTopOfferId }) => {
  const [renderedCatalogItems, setRenderedCatalogItems] = useState([...catalogItems]);
  const [currentFilters, setCurrentFilters] = useState({
    sorting: 'По популярности',
    price: {
      min: 14,
      max: 70,
    },
    fatness: 'до 30%',
    fillers: [
      'шоколадные',
      'сахарные присыпки',
      'фрукты',
      'сиропы',
      'джемы',
    ],
  });

  useEffect(() => {
    const newRenderedCatalogItems = getRenderedCatalogItems(catalogItems, currentFilters, currentFilters.sorting);
    setRenderedCatalogItems(newRenderedCatalogItems);
  }, [currentFilters]);

  const handleApplyBtnClick = useCallback((newFilters: TCurrentFilters) => {
    setCurrentFilters(newFilters);

    const newRenderedCatalogItems = getRenderedCatalogItems(catalogItems, newFilters, newFilters.sorting);
    setRenderedCatalogItems(newRenderedCatalogItems);
  }, []);

  return (
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
          <Filters handleApplyBtnClick={handleApplyBtnClick} />
          <Catalog catalogItems={renderedCatalogItems} />
        </main>
      </div>
    </div>
  );
}
