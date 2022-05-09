import {
  FC,
  useState,
  useCallback,
} from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

// Components
import {
  MainPage,
  CatalogPage,
} from '../';

// Types
import { TCartItem } from '../../types';

// Constants
import { routes } from '../../constants';

export const App: FC = () => {
  const [currentTopOfferId, setCurrentTopOfferId] = useState(1);
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  const deleteCartItem = useCallback((id: number) => {
    const indexToDelete = cartItems.findIndex((cartItem) => cartItem.id === id);
    setCartItems(
      [
        ...cartItems.slice(0, indexToDelete),
        ...cartItems.slice(indexToDelete + 1),
      ],
    );
  }, [cartItems]);

  const addCartItem = useCallback((cartItem: TCartItem) => {
    setCartItems([
      ...cartItems,
      {
        ...cartItem,
        id: cartItems.length
          ? cartItems[cartItems.length - 1].id + 1
          : 1,
      }
    ]);   
  }, [cartItems]);

  return (
    <Routes>
      <Route
        path={routes.mainPage}
        element={
          <MainPage
            cartItems={cartItems}
            deleteCartItem={deleteCartItem}
            addCartItem={addCartItem}
            currentTopOfferId={currentTopOfferId}
            setCurrentTopOfferId={setCurrentTopOfferId}
          />
        }
      />
      <Route
        path={routes.catalogPage}
        element={
          <CatalogPage
            cartItems={cartItems}
            deleteCartItem={deleteCartItem}
            addCartItem={addCartItem}
            currentTopOfferId={currentTopOfferId}
          />
        }
      />
    </Routes>
  );
}
