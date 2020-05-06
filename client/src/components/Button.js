import '@vaadin/vaadin-button';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import stylePropType from 'react-style-proptype';

export default function Button(props) {
  const { name, onClick, disabled, style, theme, className, children } = props;

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
      theme={theme}>
      {children}
    </vaadin-button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  style: stylePropType,
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  name: '',
  theme: '',
  style: {},
};
