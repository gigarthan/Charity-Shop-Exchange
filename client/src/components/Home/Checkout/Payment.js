import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';
import TextFieldWithLabel from '../../TextFieldWithLabel';
import card1 from '../../../assets/img/card1.png';
import card2 from '../../../assets/img/card2.png';
import card3 from '../../../assets/img/card3.png';

export default function Payment(props) {
  const { formData, handleChange } = props;
  const { payment, delivery } = formData;
  const [isOpen, setisOpen] = useState(false);

  const handleSubmit = () => {
    console.log('Submit', formData);
  };

  return (
    <Collapsable
      title="Payment"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="payment-textbox-width">
        <div className="relative">
          <TextFieldWithLabel 
            label={'Card Information'}
            placeholder={'1234 1234 1234 1234'}
            name="payment.card_number"
            value={payment.card_number}
            onChange={handleChange}
          />
          <div className="payment-card-img">
            <img className="" src={card1} alt="card1" />
            <img className="" src={card2} alt="card2" />
            <img className="" src={card3} alt="card3" />
          </div>
        </div>
      </div>
      <div className="payment-textbox-width">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="payment-textbox-inner-width">
            <div className="relative">
              <TextFieldWithLabel 
                placeholder={'MM/YY'}
                name="payment.expiry_at"
                value={payment.expiry_at}
                onChange={handleChange}
                max={5}
              />
            </div>
          </div>
          <div className="payment-textbox-inner-width">
            <div className="relative">
              <TextFieldWithLabel 
                placeholder={'CVV'}
                name="payment.cvv"
                value={payment.cvv}
                onChange={handleChange}
              />
              <div className="payment-card-img">
                <img className="" src={card1} alt="card1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-textbox-width">
        <div className="relative">
          <TextFieldWithLabel 
            label={'Name of Card'}
            placeholder={''}
            name="payment.name"
            value={payment.name}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <div className="mt-4">
        <div className="delivery-frequency">Your's:</div>
      </div> */}
      <div className="flex flex-col sm:flex-row w-full">
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Phone number'}
              name="payment.phone"
              value={payment.phone}
              onChange={handleChange}
            />
            </div>
        </div>
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel 
              label={'Email address'}
              name="payment.email"
              value={payment.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {!delivery.is_used_same_address_for_billing ? (
        <>
          <div className="mt-4">
            <div className="delivery-frequency">Billing address:</div>
          </div>
          <div className="flex flex-col sm:flex-row w-full flex-wrap">
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel 
                  label={'First name'}
                  name="payment.billing_firstname"
                  value={payment.billing_firstname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel 
                  label={'Last name'}
                  name="payment.billing_lastname"
                  value={payment.billing_lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel 
                  label={'UK Postcode'}
                  name="payment.billing_postcode"
                  value={payment.billing_postcode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel 
                  label={'Address line 1'}
                  name="payment.billing_address_1"
                  value={payment.billing_address_1}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel 
                  label={'Address line 2'}
                  name="payment.billing_address_2"
                  value={payment.billing_address_2}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel 
                  label={'Town / City'}
                  name="payment.billing_town"
                  value={payment.billing_town}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}

    {/* <div className="mt-4">
      <Button theme="small" onClick={handleSubmit}>
        Place Order
      </Button>
    </div> */}
    </Collapsable>
  );
}
