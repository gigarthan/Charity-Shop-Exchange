import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';
import TextFieldWithLabel from '../../TextFieldWithLabel';
import RadioField from '../../RadioField';
import CheckboxField from '../../CheckboxField';
import useFormDataValidation, { isRequired, isEmail, isValidPostCode } from "../../../hooks/useFormDataValidation";

export default function DeliveryDetails(props) {
  const { formData, handleChange } = props;

  const [formInitialValues, setFormInitialValues] = useState({ ...formData.delivery });

  useEffect(() => {
    setFormInitialValues({ ...formData.delivery });
  },[formData]);

  const fieldValidators = {
    // firstname: [isRequired],
    // lastname: [isRequired],
    fullname: [isRequired],
    postcode: [isRequired, isValidPostCode],
    address_1: [isRequired],
    address_2: [isRequired],
    town: [isRequired],
  };

  const formSubmitAction = values => {
    // console.log(values);
  };

  const [initErrors, setInitErrors] = useState({});

  const { values, errors, fieldChange } = useFormDataValidation(
    formInitialValues,
    initErrors,
    formSubmitAction,
    fieldValidators
  );

  const [isOpen, setisOpen] = useState(false);

  return (
    <Collapsable
      title="Delivery"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="mt-4">
        <div className="delivery-frequency">Each delivery costs £3.50</div>
        <RadioField name="delivery.subscription" value={formData.delivery.subscription} onChange={handleChange}/>
      </div>

      <div className="mt-4">
        <div className="delivery-frequency">Deliver to:</div>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Full name'}
              name="delivery.fullname"
              value={values.fullname}
              onChange={(value) => { 
                handleChange(value);
              }}
              required={true}
              onblur={(event) => fieldChange(event, 'fullname')}
            />
            {/* <p className="error">{errors.fullname}</p> */}
          </div>
        </div>
        {/* <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'First name'}
              name="delivery.firstname"
              value={values.firstname}
              onChange={(value) => { 
                handleChange(value);
              }}
              onblur={(event) => fieldChange(event, 'firstname')}
            />
            <p className="error">{errors.firstname}</p>
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Last name'}
              name="delivery.lastname"
              value={values.lastname}
              onblur={(event) => fieldChange(event, 'lastname')}
              onChange={(value) => { handleChange(value); }}
            />
            <p className="error">{errors.lastname}</p>
          </div>
        </div> */}
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'UK Postcode'}
              name="delivery.postcode"
              required={true}
              pattern="^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$"
              value={values.postcode}
              onblur={(event) => fieldChange(event, 'postcode')}
              onChange={(value) => { handleChange(value) }}
            />
            {/* <p className="error">{errors.postcode}</p> */}
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Address line 1'}
              name="delivery.address_1"
              required={true}
              value={values.address_1}
              onblur={(event) => fieldChange(event, 'address_1')}
              onChange={(value) => { handleChange(value)}}
            />
            {/* <p className="error">{errors.address_1}</p> */}
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Address line 2'}
              name="delivery.address_2"
              required={true}
              value={values.address_2}
              onblur={(event) => fieldChange(event, 'address_2')}
              onChange={(value) => { handleChange(value) }}
            />
            {/* <p className="error">{errors.address_2}</p> */}
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Town / City'}
              name="delivery.town"
              required={true}
              value={values.town}
              onblur={(event) => fieldChange(event, 'town')}
              onChange={(value) => { handleChange(value) }}
            />
            {/* <p className="error">{errors.town}</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4" style={{color: '#696969'}}>
        <CheckboxField 
          name="delivery.is_used_same_address_for_billing" 
          value={formData.delivery.is_used_same_address_for_billing} 
          onChange={(value) => { handleChange(value)}}
          lable="Use same address for billing"
        />
      </div>
    </Collapsable>
  );
}
