import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

export default function RadioField(props) {

  const {
    onChange
  } = props;

  const radioField = useRef(null);

  useEffect(() => {
    function handleChange(e) {
      // const value = e.target.value;
      // const name = e.target.name;

      console.log(e);
      // console.log(name);
      // onChange(name, value)
    }

    radioField.current.addEventListener('change', handleChange);
  }, []);

  return (
    <vaadin-radio-group ref={radioField}>
      <vaadin-radio-button checked theme="custom">Weekly</vaadin-radio-button>
      <vaadin-radio-button theme="custom">Bi-Weekly</vaadin-radio-button>
      <vaadin-radio-button theme="custom">Monthly</vaadin-radio-button>
    </vaadin-radio-group>
  );  
}