import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import stylePropType from 'react-style-proptype';

export default function Combo(props) {
  const {
    name,
    value,
    setValue,
    emptyValue = 0,
    items,
    itemValuePath = 'id',
    itemLabelPath = 'name',
    disabled,
    placeholder,
    style,
    theme = '',
    label = '',
    className,
  } = props;

  const combo = useRef(null);

  useEffect(() => {
    require('@vaadin/vaadin-combo-box');
    // Handle changes to the combo box
    function handleChange(e) {
      const newValue = e.target.value;

      // Clear out the combo box if the user manually typed a disabled option
      const item = items.find((i) => i[itemValuePath] === newValue);
      if (!item || item.disabled) {
        setValue(emptyValue);
      } else {
        setValue(newValue);
      }
    }

    // Set up the combo box
    combo.current.items = items;
    combo.current.itemValuePath = itemValuePath;
    combo.current.itemLabelPath = itemLabelPath;
    combo.current.value = value;
    combo.current.disabled = disabled;
    combo.current.addEventListener('change', handleChange);

    // If the item is disabled, add an overlay to the item in the pop-up list
    // that can't be clicked on, and grey out the text.
    //
    // If the item isn't disabled, just render the item name as normal.
    combo.current.renderer = (root, owner, model) => {
      if (model.item.disabled) {
        root.innerHTML = `<div class="item" style="color: #aaa; margin: -.5rem -2rem; padding: .9rem 2rem; position: relative;">${model.item.name}</div>`;
        root.querySelector('.item').addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
      } else {
        root.innerHTML = model.item.name;
      }
    };

    const el = combo.current; // Make a copy of the element for the cleanup function

    return function cleanup() {
      // Element might have been removed by this point, so use the copy
      el.removeEventListener('change', handleChange);
    };
  }, [
    value,
    setValue,
    emptyValue,
    items,
    itemValuePath,
    itemLabelPath,
    disabled,
  ]);

  return (
    <vaadin-combo-box
      name={name}
      ref={combo}
      placeholder={placeholder}
      style={style}
      class={className}
      theme={theme}
      label={label}
    />
  );
}

Combo.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
  label: PropTypes.string,
  style: stylePropType,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemValuePath: PropTypes.string,
  itemLabelPath: PropTypes.string,
  emptyValue: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

Combo.defaultProps = {
  emptyValue: 0,
  itemValuePath: 'id',
  itemLabelPath: 'name',
  disabled: false,
  label: '',
  style: {},
  theme: '',
};
