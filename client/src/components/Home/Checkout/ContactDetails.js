import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';
import TextFieldWithLabel from '../../TextFieldWithLabel';

export default function ContactDetails() {
  const [isOpen, setisOpen] = useState(false);

  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Collapsable
      title="Contact"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="flex flex-col sm:flex-row w-full">
        <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Phone number'}
            />
            <TextFieldWithLabel 
              label={'Email address'}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button theme="small" onClick={handleSubmit}>
          OK
        </Button>
      </div>
    </Collapsable>
  );
}
