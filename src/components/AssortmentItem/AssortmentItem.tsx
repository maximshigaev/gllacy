import React, {
  FC,
  useCallback,
  useRef,
} from 'react';
import cn from 'classnames';

// Styles
import './assortmentItem.scss';

// Types
import { TCartItem } from '../../types';

type TProps = {
  src: string;
  text: string;
  price: number;
  isHit?: boolean;
  addCartItem: (cartItem: TCartItem) => void;
}

export const AssortmentItem: FC<TProps> = ({ src, text, price, isHit, addCartItem }) => {
  const assortmentItemClass = cn('assortment-item', {
    'assortment-item--hit': isHit,
  });

  const handleAddBtnClick = useCallback(() => {
    addCartItem({
      name: text,
      weight: 1.5,
      price,
      src,
      id: 1,
    });
  }, [src, text, price, addCartItem]);

  const handleAssortmentItemFocus = useCallback((evt: React.FocusEvent) => {
    assortmentItemBtnContainerRef.current!.classList.add('hover');
    evt.target.classList.add('hover');
  }, []);

  const handleAssortmentItemBlur = useCallback((evt: React.FocusEvent) => {
    if (!evt.relatedTarget || !evt.relatedTarget.classList.contains('assortment-item__btn')) {
      evt.target.classList.remove('hover');
      assortmentItemBtnContainerRef.current!.classList.remove('hover');   
    }
  }, []);

  const handleAssortmentItemBtnBlur = useCallback((evt: React.FocusEvent) => {    
    evt.target.closest('.assortment-item')!.classList.remove('hover');
  }, []);

  const assortmentItemBtnContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={assortmentItemClass}
      tabIndex={0}
      onFocus={handleAssortmentItemFocus}
      onBlur={handleAssortmentItemBlur}
    > 
      <img
        src={src}
        alt={text}
        width="267"
        height="267"
      />
      <span className="assortment-item__price">
        {price}
        <small className="assortment-item__unit">/кг</small>
      </span>
      <p className="assortment-item__text">{text}</p>
      <div className="assortment-item__btn-container" ref={assortmentItemBtnContainerRef}>
        <button
          className="button assortment-item__btn"
          title="Добавить в корзину"
          onClick={handleAddBtnClick}
          onBlur={handleAssortmentItemBtnBlur}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}
