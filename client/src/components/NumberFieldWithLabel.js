import React from "react";

export default function NumberFieldWithLabel(props) {
  const { label, id, selectedTab, value, onChange, isFull } = props;

  const handleChange = (newVal) => {
    if (newVal <= 10) onChange(id, newVal, selectedTab);
  };

  const unselectedInput = () => {
    return (
      <button
        type="button"
        className={isFull ? "number-input w-full" : "number-input"}
        onClick={() => handleChange(1)}
      >
        {label}
      </button>
    );
  };

  const selectedInput = () => {
    return (
      <div
        className={
          isFull ? "number-input selected w-full" : "number-input selected"
        }
      >
        <button
          type="button"
          className="number-input-action px-2 mr-2"
          onClick={() => handleChange(value - 1)}
        >
          -
        </button>
        <div className="number-input-text mr-2">{label}</div>
        <button
          type="button"
          className="number-input-action px-2"
          onClick={() => handleChange(value + 1)}
        >
          +
        </button>

        <div className="number-input-count">{value}</div>
      </div>
    );
  };

  if (value && value > 0) return selectedInput();

  return unselectedInput();
}
