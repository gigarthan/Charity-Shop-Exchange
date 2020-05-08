import React, {useEffect, useRef} from 'react';
import '@vaadin/vaadin-text-field';

export default function NumberFieldWithLabel(props) {

  const {
    label
  } = props;

  return (
    <div>
      <vaadin-text-field value={label}></vaadin-text-field>
    </div>
  );  
}