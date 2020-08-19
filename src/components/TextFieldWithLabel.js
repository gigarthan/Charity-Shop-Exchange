import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

export default function TextFieldWithLabel(props) {
  const {
    label,
    placeholder,
    onChange,
    name,
    className,
    value,
    max,
    required,
    pattern,
    error,
    title,
    autocomplete,
    keyToUpdate,
    htmlFor,
    type,
    id,
  } = props;

  const textField = useRef(null);

  useEffect(() => {
    require('@vaadin/vaadin-text-field');
    // Handle changes to the combo box
    function handleChange(e) {
      // eslint-disable-next-line no-shadow
      const { value } = e.target;
      onChange({ keyToUpdate, value });
      console.log('BEINF CALLED');
    }

    function handleOnBlue(e) {
      props.onblur(e);
    }

    textField.current.addEventListener('change', handleChange);
    if (props.onblur) {
      textField.current.addEventListener('blur', handleOnBlue);
    }
  }, []);
  return (
    <div className="payment-text-field">
      <vaadin-text-field
        type={type}
        ref={textField}
        autocomplete={autocomplete}
        required={required}
        name={name}
        htmlFor={htmlFor}
        keyToUpdate={keyToUpdate}
        pattern={pattern || ''}
        error-message={error || ''}
        title={title || ''}
        class={`custom-style ${className || 'w-full'}`}
        placeholder={placeholder}
        label={label}
        value={value || ''}
        maxLength={max || ''}
        id={id}
      />
    </div>
  );
}

TextFieldWithLabel.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  keyToUpdate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  autocomplete: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onblur: PropTypes.bool.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

TextFieldWithLabel.defaultProps = {
  label: '',
  placeholder: '',
};
