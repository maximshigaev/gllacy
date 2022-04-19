import { FC } from 'react';

// Styles
import './header.scss';

// Images
import logo from '../../images/logo.png';

export const Header: FC = () => (
  <header>
    <nav>
      <a href="#">
        <img
          src={logo}
          alt="Логотип Gllacy"
          width="154"
          height="62"
        />
      </a>
      <ul>
        <li>
          <a className="header__nav-link" href="#">Каталог</a>
        </li>
        <li>
          <a className="header__nav-link" href="#">Доставка и оплата</a>
        </li>
        <li>
          <a className="header__nav-link" href="#">О Компании</a>
        </li>
      </ul>
      <button type="button" />
      <ul>
        <li>
          <a className="header__login-link" href="#">Вход</a>
        </li>
        <li>
          <a className="header__cart- link" href="#">Пусто</a>
        </li>
      </ul>
      <div>
        <p className="header__time">С 10 до 20, ежедневно</p>
        <p className="header__phone">8 812 450-25-25</p>
      </div>
    </nav>
  </header>
);
