import { FC } from 'react';

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
          <a href="#">Каталог</a>
        </li>
        <li>
          <a href="#">Доставка и оплата</a>
        </li>
        <li>
          <a href="#">О Компании</a>
        </li>
      </ul>
      <button type="button" />
      <ul>
        <li>
          <a href="#">Вход</a>
        </li>
        <li>
          <a href="#">Пусто</a>
        </li>
      </ul>
      <div>
        <p>С 10 до 20, ежедневно</p>
        <p>8 812 450-25-25</p>
      </div>
    </nav>
  </header>
);
