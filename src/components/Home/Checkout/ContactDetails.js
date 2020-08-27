import React, { useState } from 'react';

import TextFieldWithLabel from '../../TextFieldWithLabel';
import Collapsable from '../Collapsable';

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
      <div className="flex flex-col w-full sm:flex-row">
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel
              label="Phone number"
              name="contact.phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel
              label="Email address"
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
