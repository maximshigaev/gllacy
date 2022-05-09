import { FC } from 'react';

// Components
import { CartItem } from '../';

// Styles
import './cart.scss';

// Types
import { TCartItem } from '../../types';

// Helpers
import { getCartSum } from '../../helpers';

type TProps = {
  isVisible: boolean;
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
  handleCartMouseLeave: () => void;
  handleCartMouseEnter: () => void;
}

export const Cart: FC<TProps> = ({
  isVisible,
  cartItems,
  deleteCartItem,
  handleCartMouseLeave,
  handleCartMouseEnter,
}) => (
  <>
    {isVisible && (
      <div
        className="cart"
        onMouseLeave={handleCartMouseLeave}
        onMouseEnter={handleCartMouseEnter}
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
        >
          Оформить заказ
          </button>
      </div>
    )}
  </>
);
