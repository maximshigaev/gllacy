import { FC } from 'react';

// Styles
import './footer.scss';

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
        <a className="footer__info-link footer__info-link--suppliers" href="#">Для поставщиков</a>
      </li>
      <li>
        <a className="footer__info-link" href="#">Наши документы</a>
      </li>
      <li>
        <a className="footer__info-link" href="#">О производстве</a>
      </li>
      <li>
        <a className="footer__info-link" href="#">Экологические стандарты</a>
      </li>
    </ul>
    <div className="footer__copyright">
      <p></p>
      Сделано в <a className="footer__copyright-link" href="#">HTML Academy</a> © 2017
    </div>
  </footer>
);
