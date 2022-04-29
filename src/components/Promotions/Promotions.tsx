import { FC } from 'react';

// Components
import { PromotionItem } from '../';

// Styles
import './promotions.scss';

// Constants
import { promotionItems } from '../../constants';

export const Promotions: FC = () => (
  <section>
    <h2 className="visually-hidden">Акции</h2>
    <ul className="promotions__list">
      {promotionItems.map(({ id, text, title, buttonText }) => (
        <li key={id}>
          <PromotionItem
            title={title}
            text={text}
            buttonText={buttonText}
            id={id}
          />
        </li>  
      ))}
    </ul>
  </section>
);
