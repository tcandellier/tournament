import React from 'react';
import { withFormsy } from 'formsy-react';

const idForName = (name) => `player-form-${name}`;

const Input = ({
  name,
  type,
  label,
  value,
  onChange,
  disabled,
  isInvalid,
  errorMessage  
}) => (
  <div className="input-field">
    <input
      id={idForName(name)}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={isInvalid ? 'invalid' : undefined}
      autoComplete="off"
    />
    <label
      htmlFor={idForName(name)}
      className={value ? 'active' : undefined}
      data-error={errorMessage}
    >{label}</label>
  </div>
);

const adaptForFormsyProps = (input) => {
  return ({
    name,
    type,
    label,
    getValue,
    setValue,
    isFormDisabled,
    isValid,
    getErrorMessage
  }) => input({
    name: name,
    type: type,
    label: label,
    value: getValue(),
    onChange: e => setValue(e.target.value),
    disabled: isFormDisabled(),
    isInvalid: !isValid(),
    errorMessage: getErrorMessage()
  });
};

export default withFormsy(adaptForFormsyProps(Input));
