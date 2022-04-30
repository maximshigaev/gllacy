import { FC } from 'react';

// Styles
import './contacts.scss';

export const Contacts: FC = () => (
  <section className="contacts">
    <h2 className="visually-hidden">Контакты</h2>
    <iframe
      className="contacts__map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.
        603625300295!2d30.320858715957424!3d59.93871916905443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.	1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L
        3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!
        4v1583130603431!5m2!1sru!2sru"
    />
    <div className="contacts__wrapper">
      <p className="contacts__text">
        Адрес главного офиса и офлайн-магазина:
      </p>
      <p className="contacts__address">
        ул. Большая Конюшенная 19/8, Санкт-Петербург
      </p>
      <p className="contacts__info">
        Для заказов по телефону:
      </p>
      <a className="contacts__phone" href="tel:+78124502525">8 812 450-25-25</a>
      <p className="contacts__time">(с 10 до 20 ежедневно)</p>
      <button
        className="button contacts__button"
        type="button"
        title="Форма обратной связи"
      >
        Форма обратной связи
      </button>
    </div>
  </section>
);
