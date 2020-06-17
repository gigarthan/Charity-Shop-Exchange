import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-text-field';

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
    id

  } = props;
 

  const textField = useRef(null);

  useEffect(() => {
    // Handle changes to the combo box
    function handleChange(e) {
      const value = e.target.value;
      onChange({ keyToUpdate, value });
      ;
    }

    function handleOnBlue(e){
      const value = e.target.value;
      props.onblur(e)
    }

    textField.current.addEventListener('change', handleChange);
    if(props.onblur){
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
        class={`custom-style ${className ? className : 'w-full'}`} 
        placeholder={placeholder} 
        label={label} 
        value={value || ''}
        maxLength={max || ''}
        id={id}
      >
      </vaadin-text-field>
    </div>
  );  
}