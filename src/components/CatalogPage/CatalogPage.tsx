import {
  FC,
  useState,
  useCallback,
  useEffect,
} from 'react';
import cn from 'classnames';

// Components
import {
  Header,
  Filters,
  Catalog,
  Footer,
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
  CATALOG_PAGE_SIZE,
} from '../../constants';

// Helpers
import {
  getRenderedCatalogItems,
  getNumberOfPages,
} from '../../helpers';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  currentTopOfferId: number;
  addCartItem: (cartItem: TCartItem) => void;
}

export const CatalogPage: FC<TProps> = ({ cartItems, deleteCartItem, currentTopOfferId, addCartItem }) => {
  const [renderedCatalogItems, setRenderedCatalogItems] = useState([...catalogItems]);
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  }, []);

  const handlePaginationBtnClick = useCallback((currentPage: number) => setCurrentPage(currentPage), []);

  const getPaginationBtnClass = (pageNumber: number) => cn('catalog-page__pagination-btn', {
    'catalog-page__pagination-btn--current': pageNumber === currentPage,
  });

  const handlePrevBtnClick = useCallback(() => setCurrentPage(currentPage - 1), [currentPage]);
  const handleNextBtnClick = useCallback(() => setCurrentPage(currentPage + 1), [currentPage]);

  const numberOfPages = getNumberOfPages(renderedCatalogItems);

  return (
    <div className={`page__wrapper page__wrapper--catalog page__wrapper--slide-${currentTopOfferId}`}>
      <div className="page__container">
        <Header cartItems={cartItems} deleteCartItem={deleteCartItem} />
        <main className="catalog-page__main">
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
                tabIndex={-1}
              >
                Сливочное
              </a>
            </li>
          </ul>
          <h2 className="catalog-page__title">Сливочное мороженое</h2>
          <Filters handleApplyBtnClick={handleApplyBtnClick} />
          <Catalog
            catalogItems={renderedCatalogItems
              .slice((currentPage - 1) * CATALOG_PAGE_SIZE, currentPage * CATALOG_PAGE_SIZE)}
            addCartItem={addCartItem}
          />
          {(numberOfPages > 1) && (
            <div className="catalog-page__pagination">
              <button
                className="catalog-page__btn catalog-page__btn--prev"
                title="Предыдущая страница"
                disabled={currentPage === 1}
                onClick={handlePrevBtnClick}
              />
              <ul className="catalog-page__pagination-list">
                {new Array(numberOfPages).fill('').map((_, index) => (
                  <li key={index}>
                    <button
                      className={getPaginationBtnClass(index + 1)}
                      title={`Страница ${index + 1}`}
                      disabled={index + 1 === currentPage}
                      onClick={() => handlePaginationBtnClick(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="catalog-page__btn catalog-page__btn--next"
                title="Следующая страница"
                disabled={currentPage === numberOfPages}
                onClick={handleNextBtnClick}
              />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
