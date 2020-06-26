import React, { useEffect, useRef } from 'react';

export default function EmailMeWhenSubscribed(props) {
  const { onChange, keyToUpdate, lable } = props;

  const checkBoxRef = useRef(null);

  useEffect(() => {
    require('@vaadin/vaadin-checkbox');
    function handleChange(e) {
      onChange({ keyToUpdate, value: e.target.checked }, e);
    }

    checkBoxRef.current.addEventListener('change', handleChange);
  }, []);

  return (
    <vaadin-checkbox theme="custom" ref={checkBoxRef} class="checkbox-font">
      {lable}
    </vaadin-checkbox>
  );
}
