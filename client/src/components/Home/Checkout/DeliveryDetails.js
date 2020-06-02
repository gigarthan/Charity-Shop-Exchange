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
    firstname: [isRequired],
    lastname: [isRequired],
    // fullname: [isRequired],
    postcode: [isRequired, isValidPostCode],
    address_1: [isRequired],
    address_2: [],
    town: [isRequired],
    county: []
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

  const minmum2CharachterRegx = /^.{2,}$/;

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
        {/* <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              autoselect
              label='Full name'
              autocomplete="name"
              name="delivery.fullname"
              value={values.fullname}
              onChange={(value) => { 
                handleChange(value);
              }}
              required={true}
              onblur={(event) => fieldChange(event, 'fullname')}
            />
            <p className="error">{errors.fullname}</p>
          </div>
        </div> */}
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'First name'}
              name="delivery.firstname"
              value={values.firstname}
              onChange={(value) => { 
                handleChange(value);
              }}
              pattern=".{2,}"
              error={(values.firstname && values.firstname.length > 0) && !minmum2CharachterRegx.test(values.firstname) && 'Please enter recipients first name'}
              required={true}
              onblur={(event) => fieldChange(event, 'firstname')}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Last name'}
              name="delivery.lastname"
              value={values.lastname}
              pattern=".{2,}"
              required={true}
              error={(values.lastname && values.lastname.length > 0) && !minmum2CharachterRegx.test(values.lastname) && 'Please enter recipients last name'}
              onblur={(event) => fieldChange(event, 'lastname')}
              onChange={(value) => { handleChange(value); }}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'UK Postcode'}
              name="delivery.postcode"
              required={true}
              pattern="^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$"
              value={values.postcode}
              error={(values.postcode && values.postcode.length > 0) && !(/^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/).test(values.postcode) && 'Please enter a valid postcode'}
              onblur={(event) => fieldChange(event, 'postcode')}
              onChange={(value) => { handleChange(value) }}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Address line 1'}
              name="delivery.address_1"
              required={true}
              pattern=".{1,}"
              value={values.address_1}
              error={(values.address_1 && values.address_1.length > 0) && !(/^.{1,}$/).test(values.address_1) && 'Please enter a valid address'}
              onblur={(event) => fieldChange(event, 'address_1')}
              onChange={(value) => { handleChange(value)}}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Address line 2'}
              name="delivery.address_2"
              value={values.address_2}
              onblur={(event) => fieldChange(event, 'address_2')}
              onChange={(value) => { handleChange(value) }}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Town / City'}
              name="delivery.town"
              required={true}
              value={values.town}
              pattern=".{2,}"
              error={(values.town && values.town.length > 0) && !minmum2CharachterRegx.test(values.town) && 'Please enter the postal town or city'}
              onblur={(event) => fieldChange(event, 'town')}
              onChange={(value) => { handleChange(value) }}
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-1">
          <div className="relative">
            <TextFieldWithLabel 
              label={'County'}
              name="delivery.county"
              value={values.county}
              onblur={(event) => fieldChange(event, 'county')}
              onChange={(value) => { handleChange(value) }}
            />
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
