import { FC } from 'react';

// Styles
import './assortmentItem.scss';

type TProps = {
  src: string;
  text: string;
  price: number;
}

export const AssortmentItem: FC<TProps> = ({ src, text, price}) => (
   <> 
    <img
      src={src}
      alt={text}
      width="267"
      height="267"
    />
    <span className="assortmentItem__price">
      {price}
      <small className="assortmentItem__unit">/кг</small>
    </span>
    <p className="assortmentItem__text">{text}</p>
  </>
);
