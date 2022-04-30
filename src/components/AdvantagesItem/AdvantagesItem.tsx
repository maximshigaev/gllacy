import { FC } from 'react';

// Styles
import './advantagesItem.scss';

type TProps = {
  text: string;
  id: number;
}

export const AdvantagesItem: FC<TProps> = ({ text, id }) => (
  <p className={`advantages-item advantages-item--${id}`}>
    {text}
  </p>
);
