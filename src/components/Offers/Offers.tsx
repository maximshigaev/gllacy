import {
  FC,
  useCallback,
} from 'react';
import cn from 'classnames';

// Components
import { OffersItem } from '../';

// Styles
import './offers.scss';

// Constants
import { offersItems } from '../../constants';

type TProps = {
  currentTopOfferId: number;
  setCurrentTopOfferId: (id: number) => void;
}

type TCurrentTopOffer = {
  title: string;
  id: number;
}

export const Offers: FC<TProps> = ({ currentTopOfferId, setCurrentTopOfferId }) => {
  const renderTopOffer = (topOfferId: number) => {
    const currentTopOffer = offersItems.find((topOffer) => topOffer.id === topOfferId);

    return (
      <OffersItem title={(currentTopOffer as TCurrentTopOffer).title} />
    );
  }

  const getToggleBtnClass = (id: number) => cn('offers__toggle-btn', {
    'offers__toggle-btn--current': id === currentTopOfferId,
  });
  
  const handleToggleBtnClick = useCallback((id: number) => setCurrentTopOfferId(id), [setCurrentTopOfferId]);

  return (
    <section className="offers">
      <h2 className="visually-hidden">Лучшие предложения</h2>
      {renderTopOffer(currentTopOfferId)}
      <ul className="offers__toggle-btns-list">
        {offersItems.map((offerItem, index) => (
          <li className="offers__toggle-btns-item" key={offerItem.id}>
            <button
              className={getToggleBtnClass(index + 1)}
              type="button"
              title={`${index + 1}й слайд`}
              disabled={index + 1 === currentTopOfferId}
              onClick={() => handleToggleBtnClick(index + 1)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
