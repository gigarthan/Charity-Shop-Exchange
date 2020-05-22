import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

export default function RadioField(props) {

  const {
    onChange,
    value,
    name
  } = props;

  const radioField = useRef(null);

  useEffect(() => {
    function handleChange(e) {
      onChange({ name, value: e.target.value })
    }

    radioField.current.addEventListener('change', handleChange);
  }, []);

  return (
    <vaadin-radio-group ref={radioField}>
      <vaadin-radio-button class="radio-width" checked={value == 'Weekly'} theme="custom" value="week">Weekly</vaadin-radio-button>
      <vaadin-radio-button class="radio-width" checked={value == 'Bi-Weekly'} theme="custom" value="other week">Bi-Weekly</vaadin-radio-button>
      <vaadin-radio-button class="radio-width" checked={value == 'Monthly'} theme="custom" value="month">Monthly</vaadin-radio-button>
    </vaadin-radio-group>
  );  
}