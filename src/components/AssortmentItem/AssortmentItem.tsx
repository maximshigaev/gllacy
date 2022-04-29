import { FC } from 'react';
import cn from 'classnames';

// Styles
import './assortmentItem.scss';

type TProps = {
  src: string;
  text: string;
  price: number;
  isHit: boolean;
}

export const AssortmentItem: FC<TProps> = ({ src, text, price, isHit }) => {
  const assignmentItemClass = cn('assortment-item', {
    'assortment-item--hit': isHit,
  });

  return (
    <div className={assignmentItemClass}> 
      <img
        src={src}
        alt={text}
        width="267"
        height="267"
      />
      <span className="assortment-item__price">
        {price}
        <small className="assortment-item__unit">/кг</small>
      </span>
      <p className="assortment-item__text">{text}</p>
    </div>
  );
}
