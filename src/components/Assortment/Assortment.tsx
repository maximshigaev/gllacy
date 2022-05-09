import { FC } from 'react';

// Components
import { AssortmentItem } from '../';

// Styles
import './assortment.scss';

// Constants
import { assortmentItems } from '../../constants';

// Types
import { TCartItem } from '../../types';

type TProps = {
  addCartItem: (cartItem: TCartItem) => void;
}

export const Assortment: FC<TProps> = ({ addCartItem }) => (
  <section className="assortment">
    <h2 className="visually-hidden">Наш ассортимент</h2>
    <ul className="assortment__list">
      {assortmentItems.map(({ id, src, text, price, isHit }) => (
        <li className="assortment__item" key={id}>
          <AssortmentItem
            src={src}
            text={text}
            price={price}
            isHit={isHit}
            addCartItem={addCartItem}
          />
        </li>
      ))}
    </ul>
  </section>
);
