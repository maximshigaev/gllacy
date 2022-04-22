import {
  FC,
  useState,
  useCallback,
} from 'react';
import cn from 'classnames';

// Components
import { OffersItem } from '../';

// Constants
import { offersItems } from '../../constants';

type TCurrentTopOffer = {
  title: string;
  src: string;
  id: number;
}

export const Offers: FC = () => {
  const [currentTopOfferId, setCurrentTopOfferId] = useState(1);

  const renderTopOffer = (topOfferId: number) => {
    const currentTopOffer = offersItems.find((topOffer) => topOffer.id === topOfferId);

    return (
      <OffersItem
        src={(currentTopOffer as TCurrentTopOffer).src}
        title={(currentTopOffer as TCurrentTopOffer).title}
      />
    );
  }

  const getToggleBtnClass = (id: number) => cn('offers__toggle-button', {
    'offers__toggle-button--current': id === currentTopOfferId,
  });
  
  const handleToggleBtnClick = useCallback((id: number) => setCurrentTopOfferId(id), []);

  return (
    <section>
      <h2 className="visually-hidden">Лучшие предложения</h2>
      {renderTopOffer(currentTopOfferId)}
      <ul>
        {offersItems.map((_, index) => (
          <li>
            <button
              className={getToggleBtnClass(index + 1)}
              type="button"
              onClick={() => handleToggleBtnClick(index + 1)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
