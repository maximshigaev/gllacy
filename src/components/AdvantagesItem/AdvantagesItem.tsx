import { FC } from 'react';

type TProps = {
  text: string;
}

export const AdvantagesItem: FC<TProps> = ({ text }) => (
  <p>{text}</p>
);
