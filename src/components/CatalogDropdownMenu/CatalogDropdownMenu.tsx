import { FC } from 'react';

// Styles
import './catalogDropdownMenu.scss';

type TProps = {
  isVisible: boolean;
  handleCatalogLinkMouseLeave: () => void;
  handleCatalogLinkMouseEnter: () => void;
}

export const CatalogDropdownMenu: FC<TProps> = ({
  isVisible,
  handleCatalogLinkMouseLeave,
  handleCatalogLinkMouseEnter,
}) => (
  <>
    {isVisible && (
      <ul
        className="catalog-dropdown-menu"
        onMouseLeave={handleCatalogLinkMouseLeave}
        onMouseEnter={handleCatalogLinkMouseEnter}
      >
        <li>
          <a
            className="catalog-dropdown-menu__link catalog-dropdown-menu__link--main"
            title="Новинки"
            href=""
          >
            Новинки
          </a>
        </li>
        <li>
          <a
            title="Сливочное"
            className="catalog-dropdown-menu__link"
            href=""
          >
            Сливочное
          </a>
        </li>
        <li>
          <a
            title="Щербеты"
            className="catalog-dropdown-menu__link"
            href=""
          >
            Щербеты
          </a>
        </li>
        <li>
          <a
            title="Фруктовый лед"
            className="catalog-dropdown-menu__link"
            href=""
          >
            Фруктовый лед
          </a>
        </li>
        <li>
          <a
            title="Мелорин"
            className="catalog-dropdown-menu__link"
            href=""
          >
            Мелорин
          </a>
        </li>
      </ul>
    )}
  </>
);
