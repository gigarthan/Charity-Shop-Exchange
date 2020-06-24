import React from 'react';


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
    type
  } = props;

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
      type={type}
    >
      {text}
      {props.children}
    </button>
    </>
  );
}
