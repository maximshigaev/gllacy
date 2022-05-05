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

export const Filters: FC = () => {
  const [currentFilters, setCurrentFilters] = useState({
    sorting: 'По популярности',
    price: {
      min: 14,
      max: 70,
    },
    fatness: 'до 10%',
    fillers: [
      'шоколадные',
      'сахарные присыпки',
    ],
  });

  const handleFilterChange = useCallback((key: string, value: string | { min: number, max: number } | string[]) => {
    setCurrentFilters({
      ...currentFilters,
      [key]: value,
    });
  }, [currentFilters]);

  return (
    <div className="filters">
      <form className="filters__form">
        <SortingFilter
          currentSorting={currentFilters.sorting}
          handleFilterChange={handleFilterChange}
        />
        <PriceFilter
          currentPrice={currentFilters.price}
          handleFilterChange={handleFilterChange}
        />
        <FatnessFilter
          currentFatness={currentFilters.fatness}
          handleFilterChange={handleFilterChange}
        />
        <FillersFilter
          currentFillers={currentFilters.fillers}
          handleFilterChange={handleFilterChange}
        />
        <button className="filters__btn" title="Применить">Применить</button>
      </form>
    </div>
  );
}
