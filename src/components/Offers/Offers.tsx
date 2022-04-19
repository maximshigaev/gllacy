import { FC } from 'react';

// Styles
import './offers.scss';

// Images
import topOffer1 from '../../images/top-offer-1.png';

export const Offers: FC = () => (
  <section>
    <h2 className="visually-hidden">Лучшие предложения</h2>
    <ul>
      <li>
        <img
          src={topOffer1}
          alt="Крем-брюле и пломбир с малиновым джемом"
          width="647"
          height="584"
        />
        <h3 className="offers__title">Крем-брюле и пломбир с малиновым джемом</h3>
        <button
          className="button offers__add-button"
          type="button"
          title="Давайте оба!"
        >
          Давайте оба!
        </button>
      </li>
    </ul>
    <ul>
      <li>
        <button className="offers__toggle-button offers__toggle-button--current" type="button" />
      </li>
      <li>
        <button className="offers__toggle-button" type="button" />
      </li>
      <li>
        <button className="offers__toggle-button" type="button" />
      </li>
    </ul>
  </section>
);
