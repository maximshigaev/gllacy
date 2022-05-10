import { FC } from 'react';

// Components
import { AssortmentItem } from '../';

// Styles
import './catalog.scss';

// Types
import {
  TCatalogItem,
  TCartItem,
} from '../../types';

type TProps = {
  catalogItems: TCatalogItem[];
  addCartItem: (cartItem: TCartItem) => void;
}

export const Catalog: FC<TProps> = ({ catalogItems, addCartItem }) => (
  <div className="catalog">
    {catalogItems.length ? (
      <ul className="catalog__list">
        {catalogItems.map(({ src, text, price, id }) => (
          <li key={id}>
            <AssortmentItem
              src={src}
              text={text}
              price={price}
              addCartItem={addCartItem}
            />
          </li>
        ))}
      </ul>
    ) : (
      <div className="catalog__empty-message">Не найдено товаров, соответствующих критериям поиска</div>
    )}
  </div>
);
