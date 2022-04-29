import { FC } from 'react';

// Styles
import './promotionItem.scss';

type TProps = {
  title: string;
  text: string;
  buttonText: string;
  id: number;
} 

export const PromotionItem: FC<TProps> = ({ title, text, buttonText, id }) => (
  <div className={`promotion-item promotion-item--${id}`}>
    <h3 className="promotion-item__title">{title}</h3>
    <p className="promotion-item__text">{text}</p>
    <button
      className="button promotion-item__btn"
      type="button"
      title="Хочу варенье!"
    >
      {buttonText}
    </button>
  </div>
);
