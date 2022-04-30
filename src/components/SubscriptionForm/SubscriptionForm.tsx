import { FC } from 'react';

// Styles
import './subscriptionForm.scss'; 

export const SubscriptionForm: FC = () => (
  <section className="subscription-form">
    <h2 className="visually-hidden">Форма подписки</h2>
    <p className="subscription-form__text">
      Подпишитесь на нашу сладкую рассылку и будете всегда в курсе всего самого вкусного, что у нас происходит. Обещаем
      не спамить и не слать всякой ненужной ерунды. Честно =) 
    </p>
    <form className="subscription-form__form">
      <input
        className="subscription-form__input"
        type="email"
        placeholder="Электронная почта"
      />
      <button
        className="button subscription-form__button"
        type="button"
        title="Отправить"
      >
        Отправить
      </button>
    </form>
  </section>
);
