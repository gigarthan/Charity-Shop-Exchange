import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-text-field/vaadin-number-field';

export default function NumberFieldWithLabel(props) {

  const {
    label,
    id,
    selectedTab,
    value,
    onChange
  } = props;

  const numberField = useRef(null);

  useEffect(() => {
    // Handle changes to the combo box
    function handleChange(e) {
      const value = e.target.value;
      const name = e.target.name;

      console.log(value);
      console.log(name);
      console.log(selectedTab);

      onChange(name, value, selectedTab)
    }

    numberField.current.addEventListener('change', handleChange);
  }, []);

  return (
    <div className="vaadin-number-main" key={id}>
      <vaadin-number-field 
        ref={numberField}
        id={id} 
        min="1" 
        max="10" 
        has-controls 
        label={label}
        name={id}
        value={value}
        class="vaadin-number-child bg-gray-200"
      >
      </vaadin-number-field>
    </div>
  );  
}