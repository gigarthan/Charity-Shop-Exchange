import React from 'react';

export default function NumberFieldWithLabel(props) {
  const { item, value, onChange, isFull } = props;

  const onAddQuantity = () => {
    const temp = { ...item };
    Object.assign(temp, { value: value + 1 });

    return onChange(temp);
  };

  const onSubtractQuantity = () => {
    const temp = { ...item };
    Object.assign(temp, { value: value - 1 });

    return onChange(temp);
  };

  const onQuantityOne = () => {
    const temp = { ...item };
    Object.assign(temp, { value: 1 });

    return onChange(temp);
  };

  const unselectedInput = () => {
    return (
      <button
        type="button"
        className={isFull ? 'number-input w-full' : 'number-input'}
        onClick={onQuantityOne}>
        {item.name}
      </button>
    );
  };

  const selectedInput = () => {
    return (
      <div
        className={
          isFull ? 'number-input selected w-full' : 'number-input selected'
        }>
        <button
          type="button"
          className="px-2 mr-2 number-input-action"
          onClick={onSubtractQuantity}>
          -
        </button>
        <div className="mr-2 number-input-text">{item.name}</div>
        <button
          type="button"
          className="px-2 number-input-action"
          onClick={onAddQuantity}>
          +
        </button>

        <div className="number-input-count">{value}</div>
      </div>
    );
  };

  return value > 0 ? selectedInput() : unselectedInput();
}
