import { FC } from 'react';

// Styles
import './offersItem.scss'; 

type TProps = {
  title: string;
}

export const OffersItem: FC<TProps> = ({ title }) => (
  <div className="offers-item">
    <h3 className="offers-item__title">{title}</h3>
    <button
      className="button offers-item__add-button"
      type="button"
      title="Давайте оба!"
    >
      Давайте оба!
    </button>
  </div>
);
