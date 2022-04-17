import { FC } from 'react';

export const SubscriptionForm: FC = () => (
  <section>
    <h2 className="visually-hidden">Форма подписки</h2>
    <p>
      Подпишитесь на нашу сладкую рассылку и будете всегда в курсе всего самого вкусного, что у нас происходит. Обещаем
      не спамить и не слать всякой ненужной ерунды. Честно =) 
    </p>
    <form>
      <input type="email" placeholder="Электронная почта" />
      <button type="button" title="Отправить">Отправить</button>
    </form>
  </section>
);
