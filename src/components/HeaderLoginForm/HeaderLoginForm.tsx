import {
  FC,
  useCallback,
} from 'react';

// Styles
import './headerLoginForm.scss';

type TProps = {
  handleHeaderLoginFormMouseLeave: () => void;
}

export const HeaderLoginForm: FC<TProps> = ({ handleHeaderLoginFormMouseLeave }) => {
  const handleHeaderLoginFormLinkBlur = useCallback((evt: React.FocusEvent) => {    
    if (evt.relatedTarget && !evt.relatedTarget.classList.contains('header-login-form__link')) {
      handleHeaderLoginFormMouseLeave();
    }
  }, [handleHeaderLoginFormMouseLeave]);

  return (
    <form
      className="header-login-form"
      onMouseLeave={handleHeaderLoginFormMouseLeave}
    >
      <input
        className="input header-login-form__input"
        placeholder="Электронная почта"
        type="text"
      />
      <input
        className="input header-login-form__input"
        placeholder="Пароль"
        type="password"
      />
      <button className="button header-login-form__btn" title="Войти">Войти</button>
      <div className="header-login-form__wrapper">
        <a
          className="header-login-form__link"
          title="Забыли пароль?"
          href=""
        >
          Забыли пароль?
        </a>
        <a
          className="header-login-form__link"
          title="Новая регистрация"
          href=""
          onBlur={handleHeaderLoginFormLinkBlur}
        >
          Новая регистрация
        </a>
      </div>
    </form>
  );
}
