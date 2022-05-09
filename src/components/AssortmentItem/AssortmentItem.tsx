import {
  FC,
  useCallback,
} from 'react';
import cn from 'classnames';

// Styles
import './assortmentItem.scss';

// Types
import { TCartItem } from '../../types';

type TProps = {
  src: string;
  text: string;
  price: number;
  isHit?: boolean;
  addCartItem: (cartItem: TCartItem) => void;
}

export const AssortmentItem: FC<TProps> = ({ src, text, price, isHit, addCartItem }) => {
  const assignmentItemClass = cn('assortment-item', {
    'assortment-item--hit': isHit,
  });

  const handleAddBtnClick = useCallback(() => {
    addCartItem({
      name: text,
      weight: 1.5,
      price,
      src,
      id: 1,
    });
  }, [src, text, price, addCartItem]);

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
      <div className="assortment-item__btn-container">
        <button
          className="button assortment-item__btn"
          title="Добавить в корзину"
          onClick={handleAddBtnClick}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}
