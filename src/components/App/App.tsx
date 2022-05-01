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

// Images
import cartIconItem1 from '../../images/icecream-icon-1.png';
import cartIconItem2 from '../../images/icecream-icon-2.png';

// Types
import { TCartItem } from '../../types';

// Constants
import { routes } from '../../constants';

export const App: FC = () => {
  const [currentTopOfferId, setCurrentTopOfferId] = useState(1);

  const [cartItems, setCartItems] = useState<TCartItem[]>([
    {
      id: 1,
      name: 'Пломбир с апельсиновым джемом',
      weight: 1.5,
      price: 200,
      src: cartIconItem1,
    },
    {
      id: 2,
      name: 'Клубничный пломбир с присыпкой из белого шоколада',
      weight: 1.5,
      price: 300,
      src: cartIconItem2,
    },
  ]);

  const deleteCartItem = useCallback((id: number) => {
    const indexToDelete = cartItems.findIndex((cartItem) => cartItem.id === id);
    setCartItems(
      [
        ...cartItems.slice(0, indexToDelete),
        ...cartItems.slice(indexToDelete + 1),
      ],
    );
  }, [cartItems]);

  return (
    <Routes>
      <Route
        path={routes.mainPage}
        element={
          <MainPage
            cartItems={cartItems}
            deleteCartItem={deleteCartItem}
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
            currentTopOfferId={currentTopOfferId}
          />
        }
      />
    </Routes>
  );
}
