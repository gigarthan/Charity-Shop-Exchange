import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-checkbox';

export default function CheckboxField(props) {

  const {
    onChange,
    keyToUpdate,
    lable
  } = props;

  const checkBoxRef = useRef(null);

  useEffect(() => {
    function handleChange(e) {
      onChange({ keyToUpdate, value: e.target.checked }, e)
    }

    checkBoxRef.current.addEventListener('change', handleChange);
  }, [keyToUpdate, onChange]);

  return (
    <vaadin-checkbox
        theme="custom" 
        ref={checkBoxRef}
        checked
        // value={value}
        class="checkbox-font">
            {lable}
    </vaadin-checkbox>
  );  
}