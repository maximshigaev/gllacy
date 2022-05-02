import {
  FC,
  useState,
  useCallback,
} from 'react';
import cn from 'classnames';

// Styles
import './sortingFilter.scss';

// Constants
import {
  sortingFilterOptions,
  filterTypes,
} from '../../constants';

type TProps = {
  currentSorting: string;
  handleFilterChange: (key: string, value: string) => void;
}

export const SortingFilter: FC<TProps> = ({ currentSorting, handleFilterChange }) => {
  const [isSortDropdownOpened, setIsSortDropdownOpened] = useState(false);
  const [availableOptions, setAvailableOptions] = useState(sortingFilterOptions);

  const handleSortBtnClick = useCallback(() => {
    setIsSortDropdownOpened(!isSortDropdownOpened);
  }, [isSortDropdownOpened]);

  const handleDropdownItemClick = useCallback((option: string) => {
    const indexToDelete = availableOptions.indexOf(option);

    setAvailableOptions([
      currentSorting,
      ...availableOptions.slice(0, indexToDelete),
      ...availableOptions.slice(indexToDelete + 1),
    ]);

    handleFilterChange(filterTypes.sorting, option);
    setIsSortDropdownOpened(false);
  }, [availableOptions, currentSorting, handleFilterChange]);

  const sortBtnClass = cn('sorting-filter__btn', {
    'sorting-filter__btn--up': isSortDropdownOpened,
  });

  return (
    <div>
      <p className="sorting-filter__title">Сортировка:</p>
      <div className="sorting-filter__container">
        {currentSorting}
        <button
          className={sortBtnClass}
          type="button"
          title={isSortDropdownOpened ? 'Закрыть список' : 'Раскрыть список'}
          onClick={handleSortBtnClick}
        />
        {isSortDropdownOpened && (
          <ul className="sorting-filter__dropdown">
            {availableOptions.map((availableOption) => (
              <li
                className="sorting-filter__dropdown-item"
                onClick={() => handleDropdownItemClick(availableOption)}
              >
                {availableOption}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
