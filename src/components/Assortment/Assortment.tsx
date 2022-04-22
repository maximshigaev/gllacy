import { FC } from 'react';

// Components
import { AssortmentItem } from '../';

// Styles
import './assortment.scss';

// Constants
import { assortmentItems } from '../../constants';

export const Assortment: FC = () => (
  <section>
    <h2 className="visually-hidden">Наш ассортимент</h2>
    <ul className="assortment__list">
      {assortmentItems.map(({ id, src, text, price }) => (
        <li className="assortment__item" key={id}>
          <AssortmentItem
            src={src}
            text={text}
            price={price}
          />
        </li>
      ))}
    </ul>
  </section>
);
