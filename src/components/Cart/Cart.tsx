import {
  FC,
  useCallback,
} from 'react';

// Components
import { CartItem } from '../';

// Styles
import './cart.scss';

// Types
import { TCartItem } from '../../types';

// Helpers
import { getCartSum } from '../../helpers';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  handleCartMouseLeave: () => void;
}

export const Cart: FC<TProps> = ({ cartItems, deleteCartItem, handleCartMouseLeave }) => {
  const handleCartBtnBlur = useCallback((evt: React.FocusEvent) => {    
    if (evt.relatedTarget && !evt.relatedTarget.classList.contains('cart-item__btn')) {
      handleCartMouseLeave();
    }
  }, [handleCartMouseLeave]);

  return (
    <div
      className="cart"
      onMouseLeave={handleCartMouseLeave}
    >
      {cartItems.length ? (
        <ul className="cart__list">
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <CartItem cartItem={cartItem} deleteCartItem={deleteCartItem} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="cart__info">Корзина пуста</div>
      )}
      <div className="cart__cost">
        Итого: {getCartSum(cartItems)} руб.
      </div>
      <button
        className="button cart__button"
        title="Оформить заказ"
        disabled={!cartItems.length}
        onBlur={handleCartBtnBlur}
      >
        Оформить заказ
      </button>
    </div>
  );
}
