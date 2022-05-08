import {
  FC,
  useState,
  useCallback,
} from 'react';

// Components
import {
  SortingFilter,
  PriceFilter,
  FatnessFilter,
  FillersFilter,
} from '../';

// Styles
import './filters.scss';

// Types
import { TCurrentFilters } from '../../types';

type TProps = {
  handleApplyBtnClick: (currentFilters: TCurrentFilters) => void;
}

export const Filters: FC<TProps> = ({ handleApplyBtnClick }) => {
  const [filters, setFilters] = useState({
    sorting: 'По популярности',
    price: {
      min: 14,
      max: 70,
    },
    fatness: 'до 30%',
    fillers: [
      'шоколадные',
      'сахарные присыпки',
      'фрукты',
      'сиропы',
      'джемы',
    ],
  });

  const handleFilterChange = useCallback((key: string, value: string | { min: number, max: number } | string[]) => {
    const newFilters = {
      ...filters,
      [key]: value,
    }

    setFilters(newFilters);
  }, [filters]);

  return (
    <div className="filters">
      <form className="filters__form">
        <SortingFilter
          currentSorting={filters.sorting}
          handleFilterChange={handleFilterChange}
        />
        <PriceFilter
          currentPrice={filters.price}
          handleFilterChange={handleFilterChange}
        />
        <FatnessFilter
          currentFatness={filters.fatness}
          handleFilterChange={handleFilterChange}
        />
        <FillersFilter
          currentFillers={filters.fillers}
          handleFilterChange={handleFilterChange}
        />
        <button
          className="filters__btn"
          title="Применить"
          type="button"
          onClick={() => handleApplyBtnClick(filters)}
        >
          Применить
        </button>
      </form>
    </div>
  );
}
