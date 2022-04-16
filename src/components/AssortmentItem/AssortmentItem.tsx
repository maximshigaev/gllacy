import { FC } from 'react';

type Tprops = {
  src: string;
  text: string;
  price: number;
}

export const AssortmentItem: FC<Tprops> = ({ src, text, price}) => (
   <> 
    <img
      src={src}
      alt={text}
      width="267"
      height="267"
    />
    <span>
      {price}
      <small>/кг</small>
    </span>
    <p>{text}</p>
  </>
);
