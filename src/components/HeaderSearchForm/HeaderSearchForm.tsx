import { FC } from 'react';

// Styles
import './headerSearchForm.scss';

type TProps = {
  isVisible: boolean;
  handleHeaderSearchFormMouseLeave: () => void;
  handleHeaderSearchFormMouseEnter: () => void;
}

export const HeaderSearchForm: FC<TProps> = ({
  isVisible,
  handleHeaderSearchFormMouseLeave,
  handleHeaderSearchFormMouseEnter,
}) => (
  <>
    {isVisible && (
      <form
        className="header-search-form"
        onMouseLeave={handleHeaderSearchFormMouseLeave}
        onMouseEnter={handleHeaderSearchFormMouseEnter}
      >
        <label>
          <input
            className="header-search-form__input"
            placeholder="Что ищем?"
            type="text"
          />
        </label>
      </form>
    )}
  </>
);
