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
  const { payment } = formData;
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
        <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
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
        <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
          <div className="flex flex-col sm:flex-row w-full items-center ">
            <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
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
            <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
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
        <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
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

      <div className="mt-4">
        <Button theme="small" onClick={handleSubmit}>
          Place Order
        </Button>
      </div>
    </Collapsable>
  );
}
