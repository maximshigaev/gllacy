import { FC } from 'react';

// Components
import { AdvantagesItem } from '../';

// Styles
import './advantages.scss';

// Constants
import { advantagesItems } from '../../constants';

export const Advantages: FC = () => (
  <section className="advantages">
    <h2 className="visually-hidden">Наши преимущества</h2>
    <p className="advantages__title">
      Магазин Глэйси — это онлайн- и офлайн-магазин по продаже мороженого собственного производства на развес
    </p>
    <ul className="advantages__list">
      {advantagesItems.map(({ id, text }) => (
        <li key={id}>
          <AdvantagesItem text={text} id={id} />
        </li>
      ))}
    </ul>
  </section>
);
