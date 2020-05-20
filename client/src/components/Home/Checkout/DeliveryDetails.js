import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';
import TextFieldWithLabel from '../../TextFieldWithLabel';
import RadioField from '../../RadioField';
import CheckboxField from '../../CheckboxField'

export default function DeliveryDetails(props) {
  const { formData: { delivery }, handleChange } = props;
  const [isOpen, setisOpen] = useState(false);

  return (
    <Collapsable
      title="Delivery"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="mt-4">
        <div className="delivery-frequency">Delivery frequency:</div>
        <RadioField name="delivery.subscription" value={delivery.subscription} onChange={handleChange}/>
      </div>

      <div className="mt-4">
        <div className="delivery-frequency">Delivery to:</div>
      </div>
      <div className="flex flex-col sm:flex-row w-full flex-wrap">
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'First name'}
              name="delivery.firstname"
              value={delivery.firstname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Last name'}
              name="delivery.lastname"
              value={delivery.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'UK Postcode'}
              name="delivery.postcode"
              value={delivery.postcode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Address line 1'}
              name="delivery.address_1"
              value={delivery.address_1}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Address line 2'}
              name="delivery.address_2"
              value={delivery.address_2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Town / City'}
              name="delivery.town"
              value={delivery.town}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <CheckboxField 
          name="delivery.is_used_same_address_for_billing" 
          value={delivery.is_used_same_address_for_billing} 
          onChange={handleChange}
          lable="Use same address for billing"
        />
      </div>
    </Collapsable>
  );
}
