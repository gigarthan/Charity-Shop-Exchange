import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';
import TextFieldWithLabel from '../../TextFieldWithLabel';

export default function ContactDetails(props) {
  const {
    formData: { contact },
    handleChange,
  } = props;

  const [isOpen, setisOpen] = useState(false);

  return (
    <Collapsable
      title="Contact"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel
              label={'Phone number'}
              name="contact.phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel
              label={'Email address'}
              name="contact.email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Collapsable>
  );
}
