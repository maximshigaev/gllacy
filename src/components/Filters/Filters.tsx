import {
  FC,
  useState,
  useCallback,
} from 'react';

// Components
import {
  SortingFilter,
  PriceFilter,
} from '../';

// Styles
import './filters.scss';

export const Filters: FC = () => {
  const [currentFilters, setCurrentFilters] = useState({
    sorting: 'По популярности',
    price: {
      min: 14,
      max: 70,
    }
  });

  const handleFilterChange = useCallback((key: string, value: string | { min: number, max: number }) => {
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
      </form>
    </div>
  );
}
