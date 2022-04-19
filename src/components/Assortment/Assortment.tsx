import { FC } from 'react';

// Components
import { AssortmentItem } from '../';

// Constants
import { assortmentItems } from '../../constants';

export const Assortment: FC = () => (
  <section>
    <h2 className="visually-hidden">Наш ассортимент</h2>
    <ul>
      {assortmentItems.map(({ id, src, text, price }) => (
        <li key={id}>
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
