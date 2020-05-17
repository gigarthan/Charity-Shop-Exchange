import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';
import TextFieldWithLabel from '../../TextFieldWithLabel';
import RadioField from '../../RadioField';


export default function DeliveryDetails(props) {
  const { formData: { delivery }, handleChange } = props;
  const [isOpen, setisOpen] = useState(false);

  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Collapsable
      title="Delivery"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="mt-4">
        <div className="delivery-frequency">Delivery frequency:</div>
        <RadioField />
      </div>

      <div className="mt-4">
        <div className="delivery-frequency">Delivery to:</div>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
          <div className="relative">
            <TextFieldWithLabel 
              label={'First name'}
              name="delivery.firstname"
              value={delivery.firstname}
              onChange={handleChange}
            />
            <TextFieldWithLabel 
              label={'Last name'}
              name="delivery.lastname"
              value={delivery.lastname}
              onChange={handleChange}
            />
            <TextFieldWithLabel 
              label={'UK Postcode'}
              name="delivery.postcode"
              value={delivery.postcode}
              onChange={handleChange}
            />
            <TextFieldWithLabel 
              label={'Address line 1'}
              name="delivery.address_1"
              value={delivery.address_1}
              onChange={handleChange}
            />
            <TextFieldWithLabel 
              label={'Address line 2'}
              name="delivery.address_2"
              value={delivery.address_2}
              onChange={handleChange}
            />
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
        <Button theme="small" onClick={handleSubmit}>
          OK
        </Button>
      </div>
    </Collapsable>
  );
}
