import React, {
  FC,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { throttle } from 'lodash';

// Styles
import './priceFilter.scss';

// Constants
import { filterTypes } from '../../constants';

// Helpers
import { getCurrentPrice } from '../../helpers';

type TProps = {
  currentPrice: {
    min: number;
    max: number;
  };
  handleFilterChange: (key: string, value: string | { min: number, max: number }) => void;
}

export const PriceFilter: FC<TProps> = ({ currentPrice, handleFilterChange }) => {
  const leftPinRef = useRef<HTMLDivElement>(null);
  const rightPinRef = useRef<HTMLDivElement>(null);
  const outerBarRef = useRef<HTMLDivElement>(null);
  const innerBarRef = useRef<HTMLDivElement>(null);

  const handlePriceChange = throttle((price: { min: number, max: number }) => {   
    handleFilterChange(filterTypes.price, price);
  }, 50);

  const getIsLeftPin = useCallback((evt: MouseEvent | React.KeyboardEvent) => (evt.target as HTMLDivElement)
    .classList.contains('price-filter__pin--left'), []);

  const getOuterBarCoords = useCallback(() => ({
    outerBarLeftCoord: outerBarRef.current!.getBoundingClientRect().left + window.pageYOffset,
    outerBarRightCoord: outerBarRef.current!.getBoundingClientRect().right + window.pageYOffset,
  }), []);

  const getCanPinBeMoved = useCallback((
    evt: MouseEvent | React.KeyboardEvent,
    newCoord: number,
    rightPinLeftCoord: number,
    leftPinLeftCoord: number,
  ) => {
    const isLeftPin = getIsLeftPin(evt);
    const { outerBarRightCoord, outerBarLeftCoord } = getOuterBarCoords();

    return (isLeftPin && ((newCoord + 11) >= outerBarLeftCoord) && (newCoord < rightPinLeftCoord))
      || (!isLeftPin && ((newCoord + 11) <= outerBarRightCoord) && (newCoord > leftPinLeftCoord));
  }, [getIsLeftPin, getOuterBarCoords]);

  const preparePinForDrag = useCallback((evt: MouseEvent | React.KeyboardEvent) => {
    (evt.target as HTMLDivElement).style.zIndex = '1000';
    (evt.target as HTMLDivElement).style.top
      = (evt.target as HTMLDivElement).getBoundingClientRect().y + window.pageYOffset + 'px';
    (document.querySelector('.page__wrapper--catalog') as HTMLDivElement).append(evt.target as HTMLDivElement);
  }, []);

  const changeInnerBarWidth = useCallback((evt: MouseEvent | React.KeyboardEvent) => {
    const isLeftPin = getIsLeftPin(evt);    
    const { outerBarRightCoord, outerBarLeftCoord } = getOuterBarCoords();

    if (isLeftPin) {
      const minRange =
        ((evt.target as HTMLDivElement).getBoundingClientRect().x + window.pageXOffset + 10 - outerBarLeftCoord)
        / (outerBarRightCoord - outerBarLeftCoord) * 100;

      innerBarRef.current!.style.left = `${minRange}%`;

      handlePriceChange({
        min: Math.round(minRange),
        max: currentPrice.max,
      });
    } else {
      const maxRange =
        ((evt.target as HTMLDivElement).getBoundingClientRect().x + window.pageXOffset + 11 - outerBarLeftCoord)
        / (outerBarRightCoord - outerBarLeftCoord) * 100;

      innerBarRef.current!.style.right = `${100 - maxRange}%`;

      handlePriceChange({
        min: currentPrice.min,
        max: Math.round(maxRange),
      });
    }
  }, [currentPrice.min, currentPrice.max, getIsLeftPin, getOuterBarCoords, handlePriceChange]);

  const handlePinMouseDown = useCallback((evt: MouseEvent) => {
    let shiftX = evt.clientX - (evt.target as HTMLDivElement).getBoundingClientRect().left;

    preparePinForDrag(evt);

    const moveAt = (pageX: number) => {
      const newCoord = pageX - shiftX;
      const rightPinLeftCoord = rightPinRef.current!.getBoundingClientRect().left + window.pageYOffset;
      const leftPinLeftCoord = leftPinRef.current!.getBoundingClientRect().left + window.pageYOffset;

      if (getCanPinBeMoved(evt, newCoord, rightPinLeftCoord, leftPinLeftCoord)) {        
        (evt.target as HTMLDivElement).style.left = newCoord + 'px';
      }
    }

    moveAt(evt.pageX);

    const handlePinMouseMove = (e: MouseEvent) => {
      moveAt(e.pageX);
      changeInnerBarWidth(e);
    }

    (evt.target as HTMLDivElement).addEventListener('mousemove', handlePinMouseMove);

    const handlePinMouseUp = () => {
      (evt.target as HTMLDivElement).removeEventListener('mousemove', handlePinMouseMove);
      (evt.target as HTMLDivElement).removeEventListener('mouseleave', handlePinMouseLeave);
    };

    const handlePinMouseLeave = () => {
      (evt.target as HTMLDivElement).removeEventListener('mousemove', handlePinMouseMove);
      (evt.target as HTMLDivElement).removeEventListener('mouseup', handlePinMouseUp);
    }

    (evt.target as HTMLDivElement).addEventListener('mouseup', handlePinMouseUp, { once: true });
    (evt.target as HTMLDivElement).addEventListener('mouseleave', handlePinMouseLeave, { once: true });    
  }, [changeInnerBarWidth, getCanPinBeMoved, preparePinForDrag]);

  useEffect(() => {
    leftPinRef.current!.onmousedown = handlePinMouseDown;
    rightPinRef.current!.onmousedown = handlePinMouseDown;
  }, [handlePinMouseDown]);

  useEffect(() => {
    innerBarRef.current!.style.left = `${currentPrice.min}%`;
    innerBarRef.current!.style.right = `${100 - currentPrice.max}%`;
    leftPinRef.current!.style.left = `calc(${currentPrice.min}% - 10px)`;
    rightPinRef.current!.style.left = `calc(${currentPrice.max}% - 10px)`;
  }, []);

  const handlePinKeydown = (evt: React.KeyboardEvent) => {
    const prevLeftCoord = (evt.target as HTMLDivElement).getBoundingClientRect().left + window.pageYOffset;
    const rightPinLeftCoord = rightPinRef.current!.getBoundingClientRect().left + window.pageYOffset;
    const leftPinLeftCoord = leftPinRef.current!.getBoundingClientRect().left + window.pageYOffset;

    if ((evt.code === 'ArrowLeft') && (getCanPinBeMoved(evt, prevLeftCoord - 1, rightPinLeftCoord, leftPinLeftCoord))) {
      changeInnerBarWidth(evt);
      preparePinForDrag(evt);

      (evt.target as HTMLDivElement).style.left = prevLeftCoord - 1 + 'px';
      (evt.target as HTMLDivElement).focus();
    } else if ((evt.code === 'ArrowRight')
        && (getCanPinBeMoved(evt, prevLeftCoord, rightPinLeftCoord, leftPinLeftCoord))
    ) {
      changeInnerBarWidth(evt);
      preparePinForDrag(evt);

      (evt.target as HTMLDivElement).style.left = prevLeftCoord + 1 + 'px';
      (evt.target as HTMLDivElement).focus();
    }
  }

  return (
    <div className="price-filter">
      <p className="price-filter__title">
        Цена: {getCurrentPrice(currentPrice.min)} руб.
        - {getCurrentPrice(currentPrice.max)} руб.
      </p>
      <div className="price-filter__container">
        <div
          className="price-filter__outer-bar"
          ref={outerBarRef}
        >
          <div
            className="price-filter__inner-bar"
            ref={innerBarRef}
          />
          <div
            className="price-filter__pin price-filter__pin--left"
            ref={leftPinRef}
            tabIndex={0}
            title="Цена от"
            onKeyDown={handlePinKeydown}
          />
          <div
            className="price-filter__pin price-filter__pin--right"
            ref={rightPinRef}
            tabIndex={0}
            title="Цена до"
            onKeyDown={handlePinKeydown}
          />
        </div>
      </div>
    </div>
  );
}
