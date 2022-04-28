import { FC } from 'react';

// Styles
import './headerLoginForm.scss';

type TProps = {
  isVisible: boolean;
  handleHeaderLoginFormMouseLeave: () => void;
  handleHeaderLoginFormMouseEnter: () => void;
}

export const HeaderLoginForm: FC<TProps> = ({
  isVisible,
  handleHeaderLoginFormMouseLeave,
  handleHeaderLoginFormMouseEnter,
}) => (
  <>
    {isVisible && (
      <form
        className="header-login-form"
        onMouseLeave={handleHeaderLoginFormMouseLeave}
        onMouseEnter={handleHeaderLoginFormMouseEnter}
      >
        <input
          className="header-login-form__input"
          placeholder="Электронная почта"
          type="text"
        />
        <input
          className="header-login-form__input"
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
          >
            Новая регистрация
          </a>
        </div>
      </form>
    )}
  </>
);
