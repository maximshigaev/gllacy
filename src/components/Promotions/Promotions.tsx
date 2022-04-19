import { FC } from 'react';

// Components
import { PromotionItem } from '../';

// Constants
import { promotionItems } from '../../constants';

export const Promotions: FC = () => (
  <section>
    <h2 className="visually-hidden">Акции</h2>
    <ul>
      {promotionItems.map(({ id, text, title, buttonText }) => (
        <li key={id}>
          <PromotionItem
            title={title}
            text={text}
            buttonText={buttonText}
          />
        </li>  
      ))}
    </ul>
  </section>
);
