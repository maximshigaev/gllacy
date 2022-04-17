import { FC } from 'react';

export const Contacts: FC = () => (
  <section>
    <h2 className="visually-hidden">Контакты</h2>
    <div>
      <p>
        Адрес главного офиса и офлайн-магазина:
      </p>
      <p>
        ул. Большая Конюшенная 19/8, Санкт-Петербург
      </p>
      <p>
        Для заказов по телефону:
        <span>8 812 450-25-25</span>
        (с 10 до 20 ежедневно)
      </p>
      <button type="button" title="Форма обратной связи">Форма обратной связи</button>
    </div>
  </section>
);
