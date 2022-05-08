import {
  FC,
  useCallback,
} from 'react';

// Styles
import './fatnessFilter.scss';

// Constants
import { filterTypes } from '../../constants';

type TProps = {
  currentFatness: string;
  handleFilterChange: (key: string, value: string) => void;
}

type TLabelledInputProps = {
  id: string;
  label: string;
}

export const FatnessFilter: FC<TProps> = ({ currentFatness, handleFilterChange }) => {
  const handleInputChange = useCallback(
    (label: string) => handleFilterChange(filterTypes.fatness, label),
    [handleFilterChange],
  );

  const LabelledInput: FC<TLabelledInputProps> = ({ id, label }) => (
    <>
      <input
        className="fatness-filter__input"
        type="radio"
        name="fatness"
        id={id}
        checked={currentFatness === label}
        onChange={() => handleInputChange(label)}
      />
      <label className="fatness-filter__label" htmlFor={id}>
        {label}
      </label>
    </>
  );

  return (
    <div>
      <p className="fatness-filter__title">Жирность:</p>
      <div className="fatness-filter__container">
        <LabelledInput
          id="zero"
          label="0%"
        />
        <LabelledInput
          id="under10"
          label="до 10%"
        />
        <LabelledInput
          id="under30"
          label="до 30%"
        />
        <LabelledInput
          id="over30"
          label="выше 30%"
        />
      </div>
    </div>
  );
}
