import React, {
  FC,
  useState,
  useCallback,
} from 'react';
import cn from 'classnames';
import {
  Link,
  useLocation,
} from 'react-router-dom';

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

// Constants
import { routes } from '../../constants';

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
  const handleCatalogLinkFocus = handleCatalogLinkMouseEnter;
  const handleCatalogLinkMouseLeave = useCallback((evt: React.FocusEvent | React.MouseEvent) => {
    if (evt.relatedTarget
      && !(evt.relatedTarget as HTMLElement).classList.contains('catalog-dropdown-menu__link--main')
    ) {
      setIsCatalogDropdownMenuVisible(false);
    }    
  }, []);
  const handleCatalogLinkBlur = handleCatalogLinkMouseLeave;
  const handleCatalogDropdownMenuMouseLeave = useCallback(() => setIsCatalogDropdownMenuVisible(false), []);

  const handleHeaderSearchBtnMouseEnter = useCallback(() => setIsHeaderSearchFormVisible(true), []);
  const handleHeaderSearchBtnFocus = handleHeaderSearchBtnMouseEnter;
  const handleHeaderSearchBtnMouseLeave = useCallback((evt: React.MouseEvent | React.FocusEvent) => {    
    if (evt.relatedTarget && !((evt.relatedTarget as HTMLElement).classList.contains('header-search-form')
      || ((evt.relatedTarget as HTMLElement).classList.contains('header-search-form__input')))
    ) {
      setIsHeaderSearchFormVisible(false);
    }
  }, []);
  const handleHeaderSearchBtnBlur = handleHeaderSearchBtnMouseLeave;
  const handleHeaderSearchFormMouseLeave = useCallback(() => setIsHeaderSearchFormVisible(false), []);

  const handleHeaderLoginLinkMouseEnter = useCallback(() => setIsHeaderLoginFormVisible(true), []);
  const handleHeaderLoginLinkFocus = handleHeaderLoginLinkMouseEnter;
  const handleHeaderLoginLinkMouseLeave = useCallback((evt: React.MouseEvent | React.FocusEvent) => {
    if (evt.relatedTarget && !((evt.relatedTarget as HTMLElement).classList.contains('header-login-form')
      || (evt.relatedTarget as HTMLElement).classList.contains('header-login-form__input'))
    ) {
      setIsHeaderLoginFormVisible(false);
    }    
  }, []);
  const handleHeaderLoginLinkBlur = handleHeaderLoginLinkMouseLeave;
  const handleHeaderLoginFormMouseLeave = useCallback(() => setIsHeaderLoginFormVisible(false), []);

  const handleCartBtnMouseEnter = useCallback(() => setIsCartVisible(true), []);
  const handleCartBtnFocus = handleCartBtnMouseEnter;
  const handleCartBtnMouseLeave = useCallback((evt: React.MouseEvent | React.FocusEvent) => {    
    if (evt.relatedTarget && !((evt.relatedTarget as HTMLElement).classList.contains('cart')
      || ((evt.relatedTarget as HTMLElement).classList.contains('cart-item__btn')))
    ) {
      setIsCartVisible(false);
    }
  }, []);
  const handleCartBtnBlur = handleCartBtnMouseLeave;
  const handleCartMouseLeave = useCallback(() => setIsCartVisible(false), []);

  const { pathname: path } = useLocation();

  const cartLinkClass = cn('header__cart-link', {
    'header__cart-link--filled': !!cartItems.length,
  });

  const catalogLinkClass = cn('header__nav-link', {
    'header__nav-link--current': path === routes.catalogPage,
  });

  return (
    <header className="header">
      <nav className="header__nav">
        <Link
        className="header__logo-link"
          to={(path !== routes.mainPage) ? routes.mainPage : '#'}
        >
          <img
            className="header__logo"
            src={logo}
            alt="Логотип Gllacy"
            title="Логотип Gllacy"
            width="154"
            height="62"
          />
        </Link>
        <ul className="header__nav-links">
          <li className="header__nav-item">
            <Link
              className={catalogLinkClass}
              title="Каталог"
              to={routes.catalogPage}
              onMouseEnter={handleCatalogLinkMouseEnter}
              onMouseLeave={handleCatalogLinkMouseLeave}
              onFocus={handleCatalogLinkFocus}
              onBlur={handleCatalogLinkBlur}
            >
              Каталог
            </Link>
            {isCatalogDropdownMenuVisible && (
              <CatalogDropdownMenu handleCatalogDropdownMenuMouseLeave={handleCatalogDropdownMenuMouseLeave} />
            )}
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
            title="Поиск"
            onMouseEnter={handleHeaderSearchBtnMouseEnter}
            onMouseLeave={handleHeaderSearchBtnMouseLeave}
            onFocus={handleHeaderSearchBtnFocus}
            onBlur={handleHeaderSearchBtnBlur}
          />
          {isHeaderSearchFormVisible && (
            <HeaderSearchForm handleHeaderSearchFormMouseLeave={handleHeaderSearchFormMouseLeave} />
          )}
          <ul className="header__cart-links">
            <li>
              <a
                className="header__login-link"
                title="Вход"
                href="#"
                onMouseEnter={handleHeaderLoginLinkMouseEnter}
                onMouseLeave={handleHeaderLoginLinkMouseLeave}
                onFocus={handleHeaderLoginLinkFocus}
                onBlur={handleHeaderLoginLinkBlur}
              >
                Вход
              </a>
              {isHeaderLoginFormVisible && (
                <HeaderLoginForm handleHeaderLoginFormMouseLeave={handleHeaderLoginFormMouseLeave} />
              )}
            </li>
            <li>
              <a
                className={cartLinkClass}
                title="Корзина"
                href="#"
                onMouseEnter={handleCartBtnMouseEnter}
                onMouseLeave={handleCartBtnMouseLeave}
                onFocus={handleCartBtnFocus}
                onBlur={handleCartBtnBlur}
              >
                {(cartItems.length === 0)
                  ? 'Пусто'
                  : cartItems.length + ' товар' + getCartItemsEnding(cartItems.length)
                }
              </a>
              {isCartVisible && (
                <Cart
                  cartItems={cartItems}
                  deleteCartItem={deleteCartItem}
                  handleCartMouseLeave={handleCartMouseLeave}
                />
              )}
            </li>
          </ul>
          <p className="header__time">С 10 до 20, ежедневно</p>
          <p className="header__phone">8 812 450-25-25</p>
        </div>
      </nav>
    </header>
  );
}
