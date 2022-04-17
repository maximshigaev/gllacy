import { FC } from 'react';

export const Footer: FC = () => (
  <footer>
    <h2 className="visually-hidden">Полезные ссылки</h2>
    <ul>
      <li>
        <a href="#">
          <span className="visually-hidden">Твиттер</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="visually-hidden">Инстаграм</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="visually-hidden">Фейсбук</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="visually-hidden">Вконтакте</span>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#">Для поставщиков</a>
      </li>
      <li>
        <a href="#">Наши документы</a>
      </li>
      <li>
        <a href="#">О производстве</a>
      </li>
      <li>
        <a href="#">Экологические стандарты</a>
      </li>
    </ul>
    <div>
      <p></p>
      Сделано в <a href="#">HTML Academy</a> © 2017
    </div>
  </footer>
);
