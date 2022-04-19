import { FC } from 'react';

// Styles
import './promotionItem.scss';

type TProps = {
  title: string;
  text: string;
  buttonText: string;
} 

export const PromotionItem: FC<TProps> = ({ title, text, buttonText }) => (
  <>
    <h3 className="promotionItem__title">{title}</h3>
    <p className="promotionItem__text">{text}</p>
    <button
      className="button"
      type="button"
      title="Хочу варенье!"
    >
      {buttonText}
    </button>
  </>
);
