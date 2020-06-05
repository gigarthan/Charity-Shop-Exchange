import React, { useEffect, useRef } from "react";
import "@vaadin/vaadin-button";

export default function Button(props) {
  const { name, onClick, disabled, style, theme = "", className } = props;

  const button = useRef(null);

  useEffect(() => {
    // Set up the button
    button.current.disabled = disabled;
  });

  return (
    <vaadin-button
      name={name}
      onClick={onClick}
      disabled={disabled}
      ref={button}
      style={style}
      className={className}
      theme={theme}
    >
      {props.children}
    </vaadin-button>
  );
}
