import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-text-field';

export default function TextFieldWithLabel(props) {

  const {
    label,
    placeholder,
  } = props;

  const textField = useRef(null);

  useEffect(() => {
    // Handle changes to the combo box
    function handleChange(e) {
      const value = e.target.value;
      const name = e.target.name;
    }

    textField.current.addEventListener('change', handleChange);
  }, []);

  return (
    <div className="payment-text-field">
      {/* <vaadin-text-field value={label}></vaadin-text-field> */}
      <vaadin-text-field ref={textField} class="custom-style w-full" placeholder={placeholder} label={label} value=""></vaadin-text-field>
    </div>
  );  
}