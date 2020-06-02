import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-checkbox';

export default function EmailMeWhenSubscribed(props) {

  const {
    onChange,
    name,
    lable,
  } = props;

  const checkBoxRef = useRef(null);

  useEffect(() => {
    function handleChange(e) {
      onChange({ name, value: e.target.checked }, e)
    }

    checkBoxRef.current.addEventListener('change', handleChange);
  }, []);

  return (
    <vaadin-checkbox
        theme="custom" 
        ref={checkBoxRef}
        class="checkbox-font">
            {lable}
    </vaadin-checkbox>
  );  
}