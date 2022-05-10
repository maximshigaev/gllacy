import { FC } from 'react';

// Styles
import './news.scss';

export const News: FC = () => (
  <article className="news">
    <h2 className="news__title">Новое в нашем блоге</h2>
    <a
      className="news__link"
      href="#"
      title="10 способов сервировки фруктовых щербетов к столу"
    >
      10 способов сервировки фруктовых щербетов к столу
    </a>
  </article>
);
