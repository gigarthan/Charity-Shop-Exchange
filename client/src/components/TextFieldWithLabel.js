import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-text-field';

export default function TextFieldWithLabel(props) {

  const {
    label,
    placeholder,
    onChange,
    name,
    value,
  } = props;

  const textField = useRef(null);

  useEffect(() => {
    // Handle changes to the combo box
    function handleChange(e) {
      const value = e.target.value;

      console.log('valuevaluevalue', value);
      console.log('namenamename', name);
      onChange({ name, value });
    }

    textField.current.addEventListener('change', handleChange);
  }, []);

  return (
    <div className="payment-text-field">
      {/* <vaadin-text-field value={label}></vaadin-text-field> */}
      <vaadin-text-field 
        ref={textField}
        name={name} 
        class="custom-style w-full" 
        placeholder={placeholder} 
        label={label} 
        value={value || ''}>

      </vaadin-text-field>
    </div>
  );  
}