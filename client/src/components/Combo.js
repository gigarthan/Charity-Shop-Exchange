import React, { useEffect, useRef } from "react";
import "@vaadin/vaadin-combo-box";

export default function Combo(props) {
  const {
    name,
    value,
    setValue,
    emptyValue = 0,
    items,
    itemValuePath = "id",
    itemLabelPath = "name",
    disabled,
    placeholder,
    style,
    theme = "",
    label = "",
    className,
  } = props;

  const combo = useRef(null);

  useEffect(() => {
    // Handle changes to the combo box
    function handleChange(e) {
      const value = e.target.value;

      // Clear out the combo box if the user manually typed a disabled option
      const item = items.find((i) => i[itemValuePath] === value);
      if (!item || item.disabled) {
        setValue(emptyValue);
      } else {
        setValue(value);
      }
    }

    // Set up the combo box
    combo.current.items = items;
    combo.current.itemValuePath = itemValuePath;
    combo.current.itemLabelPath = itemLabelPath;
    combo.current.value = value;
    combo.current.disabled = disabled;
    combo.current.addEventListener("change", handleChange);

    // If the item is disabled, add an overlay to the item in the pop-up list
    // that can't be clicked on, and grey out the text.
    //
    // If the item isn't disabled, just render the item name as normal.
    combo.current.renderer = function (root, owner, model) {
      if (model.item.disabled) {
        root.innerHTML = `<div class="item" style="background: #fff; color: #aaa; margin: -.5rem -2rem; padding: .9rem 2rem; position: relative;">${model.item.name}</div>`;
        root.querySelector(".item").addEventListener("click", (e) => {
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
      el.removeEventListener("change", handleChange);
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
