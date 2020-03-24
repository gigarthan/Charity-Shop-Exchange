import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-combo-box';

export default function Combo(props) {
  const {
      name,
      value,
      setValue,
      items,
      itemValuePath='id',
      itemLabelPath='name',
      disabled,
      placeholder,
      style,
      className
  } = props;

  const combo = useRef(null);

  useEffect( () => {
    // Handle changes to the combo box
    function handleChange(e) {
      setValue(e.target.value);
    }

    // Set up the combo box
    combo.current.items = items;
    combo.current.itemValuePath = itemValuePath;
    combo.current.itemLabelPath = itemLabelPath;
    combo.current.value = value;
    combo.current.disabled = disabled;
    combo.current.addEventListener('change', handleChange);
    const el = combo.current; // Make a copy of the element for the cleanup function

    return function cleanup() {
      // Element might have been removed by this point, so use the copy      
      el.removeEventListener('change', handleChange);
    }
  }, [value, setValue, items, itemValuePath, itemLabelPath, disabled]);

  return(
    <vaadin-combo-box
      name={name}
      ref={combo}
      placeholder={placeholder}
      style={style}
      className={className}
    />
  );

}