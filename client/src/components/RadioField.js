import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

export default function RadioField(props) {

  const {
    onChange,
    keyToUpdate
  } = props;

  const radioField = useRef(null);

  useEffect(() => {
    function handleChange(e) {
      onChange({ keyToUpdate, value: e.target.value })
    }

    radioField.current.addEventListener('change', handleChange);
  }, [keyToUpdate, onChange]);

  return (
    <vaadin-radio-group ref={radioField}>
      <span>Deliver every: </span>  
      <vaadin-radio-button class="radio-width" checked theme="custom" value="week"> week</vaadin-radio-button>
      <vaadin-radio-button class="radio-width" theme="custom" value="other week">other week</vaadin-radio-button>
      <vaadin-radio-button class="radio-width" theme="custom" value="month">month</vaadin-radio-button>
    </vaadin-radio-group>
  );  
}