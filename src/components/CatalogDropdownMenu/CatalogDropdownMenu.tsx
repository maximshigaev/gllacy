import React, {
  FC,
  useCallback,
} from 'react';

// Styles
import './catalogDropdownMenu.scss';

type TProps = {
  handleCatalogDropdownMenuMouseLeave: () => void;
}

export const CatalogDropdownMenu: FC<TProps> = ({ handleCatalogDropdownMenuMouseLeave }) => {
  const handleCatalogDropdownMenuLinkBlur = useCallback((evt: React.FocusEvent) => {
    if (evt.relatedTarget && !evt.relatedTarget.classList.contains('catalog-dropdown-menu__link')) {
      handleCatalogDropdownMenuMouseLeave();
    }
  }, [handleCatalogDropdownMenuMouseLeave]);

  return (
    <ul
      className="catalog-dropdown-menu"
      onMouseLeave={handleCatalogDropdownMenuMouseLeave}
    >
      <li>
        <a
          className="catalog-dropdown-menu__link catalog-dropdown-menu__link--main"
          title="Новинки"
          href="#"
        >
          Новинки
        </a>
      </li>
      <li>
        <a
          title="Сливочное"
          className="catalog-dropdown-menu__link"
          href="#"
        >
          Сливочное
        </a>
      </li>
      <li>
        <a
          title="Щербеты"
          className="catalog-dropdown-menu__link"
          href="#"
        >
          Щербеты
        </a>
      </li>
      <li>
        <a
          title="Фруктовый лед"
          className="catalog-dropdown-menu__link"
          href="#"
        >
          Фруктовый лед
        </a>
      </li>
      <li>
        <a
          title="Мелорин"
          className="catalog-dropdown-menu__link"
          href="#"
          onBlur={handleCatalogDropdownMenuLinkBlur}
        >
          Мелорин
        </a>
      </li>
    </ul>
  );
}
