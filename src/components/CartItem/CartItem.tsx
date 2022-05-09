import {
  FC,
  useCallback,
} from 'react';

// Styles
import './cartItem.scss';

// Types
import { TCartItem } from '../../types';

type TProps = {
  cartItem: TCartItem;
  deleteCartItem: (id: number) => void;
}

export const CartItem: FC<TProps> = ({ cartItem: { src, name, weight, price, id }, deleteCartItem }) => {
  const handleDeleteBtnClick = useCallback(() => deleteCartItem(id), [deleteCartItem, id]);

  return (
    <div className="cart-item">
      <button
        className="cart-item__btn"
        title="Удалить"
        onClick={handleDeleteBtnClick}
      />
      <img
        className="cart-item__icon"
        src={src}
        width="33"
        height="33"
        alt="Мини-фото мороженого"
      />
      <p className="cart-item__name">{name}</p>
      <div className="cart-item__weight">
        {weight} кг x 
        <span className="cart-item__price"> {price} руб.</span>
      </div>
      <span className="cart-item__cost">{price * weight} руб.</span>
    </div>
  );
}
