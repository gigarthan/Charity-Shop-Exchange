import React, { useState } from 'react';
import Collapsable from '../Collapsable';

export default function Selection() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Collapsable
      title="Select from book and/or DVD genres"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div>Hello world</div>
    </Collapsable>
  );
}
