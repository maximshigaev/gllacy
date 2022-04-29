import {
  FC,
  useState,
  useCallback,
} from 'react';
import cn from 'classnames';

// Components
import {
  CatalogDropdownMenu,
  HeaderSearchForm,
  HeaderLoginForm,
  Cart,
} from '../';

// Styles
import './header.scss';

// Images
import logo from '../../images/logo.png';

// Types
import { TCartItem } from '../../types';

// Helpers
import { getCartItemsEnding } from '../../helpers';

type TProps = {
  cartItems: TCartItem[];
  deleteCartItem: (id: number) => void;
}

export const Header: FC<TProps> = ({ cartItems, deleteCartItem }) => {
  const [isCatalogDropdownMenuVisible, setIsCatalogDropdownMenuVisible] = useState(false);
  const [isHeaderSearchFormVisible, setIsHeaderSearchFormVisible] = useState(false);
  const [isHeaderLoginFormVisible, setIsHeaderLoginFormVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCatalogLinkMouseEnter = useCallback(() => setIsCatalogDropdownMenuVisible(true), []);
  const handleCatalogLinkMouseLeave = useCallback(() => setIsCatalogDropdownMenuVisible(false), []);
  const handleHeaderSearchFormMouseEnter = useCallback(() => setIsHeaderSearchFormVisible(true), []);
  const handleHeaderSearchFormMouseLeave = useCallback(() => setIsHeaderSearchFormVisible(false), []);
  const handleHeaderLoginFormMouseEnter = useCallback(() => setIsHeaderLoginFormVisible(true), []);
  const handleHeaderLoginFormMouseLeave = useCallback(() => setIsHeaderLoginFormVisible(false), []);
  const handleCartMouseEnter = useCallback(() => setIsCartVisible(true), []);
  const handleCartMouseLeave = useCallback(() => setIsCartVisible(false), []);

  const cartLinkClass = cn('header__cart-link', {
    'header__cart-link--filled': !!cartItems.length,
  });

  return (
    <header className="header">
      <nav className="header__nav">
        <a href="#">
          <img
            className="header__logo"
            src={logo}
            alt="Логотип Gllacy"
            title="Логотип Gllacy"
            width="154"
            height="62"
          />
        </a>
        <ul className="header__nav-links">
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              title="Каталог"
              href="#"
              onMouseEnter={handleCatalogLinkMouseEnter}
              onMouseLeave={handleCatalogLinkMouseLeave}
            >
              Каталог
            </a>
            <CatalogDropdownMenu
              isVisible={isCatalogDropdownMenuVisible}
              handleCatalogLinkMouseEnter={handleCatalogLinkMouseEnter}
              handleCatalogLinkMouseLeave={handleCatalogLinkMouseLeave}
            />
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              title="Доставка и оплата"
              href="#"
            >
              Доставка и оплата
            </a>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              title="О Компании"
              href="#"
            >
              О Компании
            </a>
          </li>
        </ul>
        <div className="header__cart-container">
          <button
            className="header__search-btn"
            type="button"
            onMouseEnter={handleHeaderSearchFormMouseEnter}
            onMouseLeave={handleHeaderSearchFormMouseLeave}
            title="Поиск"
          />
          <HeaderSearchForm
            isVisible={isHeaderSearchFormVisible}
            handleHeaderSearchFormMouseEnter={handleHeaderSearchFormMouseEnter}
            handleHeaderSearchFormMouseLeave={handleHeaderSearchFormMouseLeave}
          />
          <ul className="header__cart-links">
            <li>
              <a
                className="header__login-link"
                title="Вход"
                onMouseEnter={handleHeaderLoginFormMouseEnter}
                onMouseLeave={handleHeaderLoginFormMouseLeave}
                href="#"
              >
                Вход
              </a>
              <HeaderLoginForm
                isVisible={isHeaderLoginFormVisible}
                handleHeaderLoginFormMouseEnter={handleHeaderLoginFormMouseEnter}
                handleHeaderLoginFormMouseLeave={handleHeaderLoginFormMouseLeave}
              />
            </li>
            <li>
              <a
                className={cartLinkClass}
                title="Корзина"
                href="#"
                onMouseEnter={handleCartMouseEnter}
                onMouseLeave={handleCartMouseLeave}
              >
                {(cartItems.length === 0)
                  ? 'Пусто'
                  : cartItems.length + ' товар' + getCartItemsEnding(cartItems.length)
                }
              </a>
              <Cart
                isVisible={isCartVisible}
                cartItems={cartItems}
                deleteCartItem={deleteCartItem}
                handleCartMouseEnter={handleCartMouseEnter}
                handleCartMouseLeave={handleCartMouseLeave}
              />
            </li>
          </ul>
          <p className="header__time">С 10 до 20, ежедневно</p>
          <p className="header__phone">8 812 450-25-25</p>
        </div>
      </nav>
    </header>
  );
}
