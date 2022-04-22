import { FC } from 'react';

// Styles
import './offersItem.scss'; 

type TProps = {
  src: string;
  title: string;
}

export const OffersItem: FC<TProps> = ({ src, title }) => (
  <div>
    <img
      src={src}
      alt={title}
      width="1079"
      height="854"
    />
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
