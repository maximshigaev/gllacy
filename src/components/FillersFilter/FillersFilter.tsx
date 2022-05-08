import React, {
  FC,
  useCallback,
} from 'react';

// Styles
import './fillersFilter.scss';

// Constants
import { filterTypes } from '../../constants';

type TProps = {
  currentFillers: string[];
  handleFilterChange: (key: string, value: string[]) => void;
}

type TLabelledInputProps = {
  id: string;
  label: string;
}

export const FillersFilter: FC<TProps> = ({ currentFillers, handleFilterChange }) => {
  const handleInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>, label: string) => {
    let newFillers;

    if (!evt.target.checked) {
      const indexToDelete = currentFillers.indexOf(label);
      newFillers = [
        ...currentFillers.slice(0, indexToDelete),
        ...currentFillers.slice(indexToDelete + 1),
      ];
    } else {
      newFillers = [...currentFillers, label];
    }
    
    handleFilterChange(filterTypes.fillers, newFillers);
  }, [handleFilterChange, currentFillers]);

  const LabelledInput: FC<TLabelledInputProps> = ({ id, label }) => (
    <>
      <input
        className="fillers-filter__input"
        type="checkbox"
        id={id}
        checked={currentFillers.includes(label)}
        onChange={(evt) => handleInputChange(evt, label)}
      />
      <label
        className="fillers-filter__label"
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
  
  return (
    <div className="fillers-filter">
      <p className="fillers-filter__title">Наполнители:</p>
      <div className="fillers-filter__container">
        <LabelledInput
          id="choco"
          label="шоколадные"
        />
        <LabelledInput
          id="sugar"
          label="сахарные присыпки"
        />
        <LabelledInput
          id="fruits"
          label="фрукты"
        />
        <LabelledInput
          id="syrups"
          label="сиропы"
        />
        <LabelledInput
          id="jams"
          label="джемы"
        />
      </div>
    </div>
  );
}
