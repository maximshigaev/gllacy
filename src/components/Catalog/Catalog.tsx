import { FC } from 'react';

// Components
import { AssortmentItem } from '../';

// Styles
import './catalog.scss';

// Constants
import { catalogItems } from '../../constants';

export const Catalog: FC = () => {
  return (
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
}
