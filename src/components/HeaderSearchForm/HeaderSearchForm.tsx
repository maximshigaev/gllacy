import {
  FC,
  useCallback,
} from 'react';

// Styles
import './headerSearchForm.scss';

type TProps = {
  handleHeaderSearchFormMouseLeave: () => void;
}

export const HeaderSearchForm: FC<TProps> = ({ handleHeaderSearchFormMouseLeave }) => {
  const handleHeaderSearchInputBlur = useCallback((evt: React.FocusEvent) => {    
    if (evt.relatedTarget && !evt.relatedTarget.classList.contains('header__search-btn')) {
      handleHeaderSearchFormMouseLeave();      
    }
  }, [handleHeaderSearchFormMouseLeave]);

  return (
    <form
      className="header-search-form"
      onMouseLeave={handleHeaderSearchFormMouseLeave}
    >
      <input
        className="input header-search-form__input"
        placeholder="Что ищем?"
        type="text"
        onBlur={handleHeaderSearchInputBlur}
      />
    </form>
  );
}
