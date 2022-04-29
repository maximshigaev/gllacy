// Types
import { TCartItem } from './types';

export const getCartSum = (cartItems: TCartItem[]) => {
  return cartItems.reduce((sum, cur) => sum + cur.price * cur.weight, 0);
}

export const getCartItemsEnding = (amount: number) => {
  if (amount === 1) {
    return '';
  } else if (((amount % 2 === 0) && (amount !== 12))
    || ((amount % 3 === 0) && (amount !== 13))
    || ((amount % 4 === 0) && (amount !== 14))) {
     return 'a';
  } else {
    return 'ов';
  }
}
