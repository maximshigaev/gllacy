import { FC } from 'react';

// Styles
import './News.scss';

export const News: FC = () => (
  <article>
    <h2 className="news__title">Новое в нашем блоге</h2>
    <h3 className="news__heading">
      10 способов сервировки фруктовых щербетов к столу
    </h3>
  </article>
);
