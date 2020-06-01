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
<<<<<<< HEAD
    type
=======
    title,
>>>>>>> 82ac059552381a41ac6495d27e223ae72ca3f374
  } = props;
 

  const textField = useRef(null);

  useEffect(() => {
    // Handle changes to the combo box
    function handleChange(e) {
      const value = e.target.value;
      onChange({ name, value });
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
        ref={textField}
        required={required}
        name={name} 
        pattern={pattern || ''}
        error-message={error || ''}
<<<<<<< HEAD
        type={type}
=======
        title={''}
>>>>>>> 82ac059552381a41ac6495d27e223ae72ca3f374
        class={`custom-style ${className ? className : 'w-full'}`} 
        placeholder={placeholder} 
        label={label} 
        value={value || ''}
        maxLength={max || ''}
      >
      </vaadin-text-field>
    </div>
  );  
}