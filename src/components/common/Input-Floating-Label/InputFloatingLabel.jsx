import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InputFloatingLabel.css';
import { searchChildrenToArrayByClassName } from '../../../utils/masks';

const InputFloatingLabel = ({
  labelFor,
  required,
  autofocus,
  value: propValue,
  inputInvalid,
  onValueChange,
  mask,
  children
}) => {
  const [value, setValue] = useState(propValue || '');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setValue(propValue || '');
  }, [propValue]);

  const handleInputChange = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, '');
    if (mask) {
      newValue = mask(newValue)
    }
    setValue(newValue);
    onValueChange(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    const newValue = event.target.value;
    setIsFocused(false);

    if (!newValue) {
      setValue('');
    }
  };

  const message = searchChildrenToArrayByClassName(children, 'message');

  const label = searchChildrenToArrayByClassName(children, 'label');

  return (
    <div className={`input-label-floating ${inputInvalid != null && inputInvalid ? 'invalid' : ''}`}>
      <input
        autoFocus={autofocus}
        id={labelFor}
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required} />

      <label htmlFor={labelFor} className={isFocused || value ? 'f-up' : ''}>
        {label}
      </label>

      {inputInvalid != null && inputInvalid && (
        <div className="message">
          <i className="bx bx-info-circle bx-flip-vertical"></i>
          {message}
        </div>
      )}
    </div>
  );
};

InputFloatingLabel.propTypes = {
  labelFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
  value: PropTypes.string,
  inputInvalid: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputFloatingLabel;
