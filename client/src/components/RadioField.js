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
      <vaadin-radio-button checked={value == 'Weekly'} theme="custom" value="Weekly">Weekly</vaadin-radio-button>
      <vaadin-radio-button checked={value == 'Bi-Weekly'} theme="custom" value="Bi-Weekly">Bi-Weekly</vaadin-radio-button>
      <vaadin-radio-button checked={value == 'Monthly'} theme="custom" value="Monthly">Monthly</vaadin-radio-button>
    </vaadin-radio-group>
  );  
}