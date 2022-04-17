import { FC } from 'react';

// Images
import topOffer1 from '../../images/top-offer-1.png';

export const Offers: FC = () => (
  <section>
    <h2 className="viaually-hidden">Лучшие предложения</h2>
    <ul>
      <li>
        <img
          src={topOffer1}
          alt="Крем-брюле и пломбир с малиновым джемом"
          width="647"
          height="584"
        />
        <h3>Крем-брюле и пломбир с малиновым джемом</h3>
        <button type="button" title="Давайте оба">Давайте оба</button>
      </li>
    </ul>
    <ul>
      <li>
        <button type="button" />
      </li>
      <li>
        <button type="button" />
      </li>
      <li>
        <button type="button" />
      </li>
    </ul>
  </section>
);
