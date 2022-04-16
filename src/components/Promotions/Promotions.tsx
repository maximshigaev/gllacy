import { FC } from 'react';

export const Promotions: FC = () => (
  <section>
    <h2 className="visually-hidden">Акции</h2>
    <ul>
      <li>
        <h3>Малинка даром!</h3>
        <p>
          При покупке 2 кг любого фруктового мороженого, добавим в ваш заказ банку малинового варенья бесплатно.
        </p>
        <button type="button">
          Хочу варенье!
        </button>
      </li>
      <li>
        <h3>Шоколадки даром!</h3>
        <p>
          При покупке 2 кг пломбира, добавим в ваш заказ упаковку вкуснейшей шоколадной присыпки совершенно бесплатно.
        </p>
        <button type="button">
          Хочу шоколадки!
        </button>
      </li>
    </ul>
  </section>
);