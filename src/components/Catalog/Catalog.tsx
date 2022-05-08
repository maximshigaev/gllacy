import { FC } from 'react';

// Components
import { AssortmentItem } from '../';

// Styles
import './catalog.scss';

// Types
import { TCatalogItem } from '../../types';

type TProps = {
  catalogItems: TCatalogItem[];
}

export const Catalog: FC<TProps> = ({ catalogItems }) => (
  <div className="catalog">
    <ul className="catalog__list">
      {catalogItems.map(({ src, text, price, id }) => (
        <li key={id}>
          <AssortmentItem
            src={src}
            text={text}
            price={price}
          />
        </li>
      ))}
    </ul>
  </div>
);
