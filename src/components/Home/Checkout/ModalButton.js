import React  from 'react';

export default function modalButton(props) {
  const {
    button,
    name,
    onClick,
    disabled,
    style,
    theme,
    text,
    className,
    type,
  children} = props;

  return (
    <>
      <button
        name={name}
        onClick={onClick}
        disabled={disabled}
        ref={button}
        style={style}
        className={className}
        theme={theme}
        // eslint-disable-next-line react/button-has-type
        type={type}>
        {text}
        {children}
      </button>
    </>
  );
}
