import { FC } from 'react';

// Styles
import './footer.scss';

export const Footer: FC = () => (
  <footer className="footer">
    <h2 className="visually-hidden">Полезные ссылки</h2>
    <ul className="footer__social-list">
      <li className="footer__social-item">
        <a
          className="footer__social-link footer__social-link--twitter"
          title="Твиттер"
          href="#"
        >
          <span className="visually-hidden">Твиттер</span>
        </a>
      </li>
      <li className="footer__social-item">
        <a
          className="footer__social-link footer__social-link--instagram"
          title="Инстаграм"
          href="#"
        >
          <span className="visually-hidden">Инстаграм</span>
        </a>
      </li>
      <li className="footer__social-item">
        <a
          className="footer__social-link footer__social-link--facebook"
          title="Фейсбук"
          href="#"
        >
          <span className="visually-hidden">Фейсбук</span>
        </a>
      </li>
      <li className="footer__social-item">
        <a
          className="footer__social-link footer__social-link--vk"
          title="Вконтакте"
          href="#"
        >
          <span className="visually-hidden">Вконтакте</span>
        </a>
      </li>
    </ul>
    <ul className="footer__info-links">
      <li className="footer__info-item">
        <a
          className="footer__info-link footer__info-link--suppliers"
          title="Для поставщиков"
          href="#"
        >
          Для поставщиков
        </a>
      </li>
      <li className="footer__info-item">
        <a
          className="footer__info-link"
          title="Наши документы"
          href="#"
        >
          Наши документы
        </a>
      </li>
      <li className="footer__info-item">
        <a
          className="footer__info-link"
          title="О производстве"
          href="#"
        >
          О производстве
        </a>
      </li>
      <li className="footer__info-item">
        <a
          className="footer__info-link"
          title="Экологические стандарты"
          href="#"
        >
          Экологические стандарты
        </a>
      </li>
    </ul>
    <div className="footer__copyright">
      <a
        className="footer__copyright-logo"
        title="HTML Academy"
        href="#"
      />
        Сделано в
      <a
        className="footer__copyright-link"
        title="HTML Academy"
        href="#"
      >
        {` HTML Academy`}
      </a>
        {` © 2017`}
    </div>
  </footer>
);
