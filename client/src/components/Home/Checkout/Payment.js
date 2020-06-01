import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import TextFieldWithLabel from '../../TextFieldWithLabel';
import Visa from '../../../assets/img/icons8-visa.svg';
import MasterCard from '../../../assets/img/icons8-mastercard.svg';
import Discover from '../../../assets/img/icons8-discover.svg';
import Card1 from '../../../assets/img/card1.png'
import Card2 from '../../../assets/img/card2.png'
import Card3 from '../../../assets/img/card3.png'
import useFormDataValidation, { isRequiredPayment, validNumber, isValidCardName, isValidEmail, validCreditCard, validCvv, validDate } from "../../../hooks/useFormDataValidation";

const valid = require('card-validator')

export default function Payment(props) {
  const { formData, handleChange } = props;
  const { payment, delivery } = formData;
  const [isOpen, setisOpen] = useState(false);


  const [formInitialValues, setFormInitialValues] = useState({ ...formData.payment });

  useEffect(() => {
    setFormInitialValues({ ...formData.payment })
  }, [formData])

  const fieldValidators = {
    phone: [isRequiredPayment, validNumber],
    email: [isRequiredPayment, isValidEmail],
    card_number: [isRequiredPayment, validCreditCard],
    expiry_at: [isRequiredPayment, validDate],
    cvv: [isRequiredPayment, validCvv],
    name: [isRequiredPayment, isValidCardName],
  }
  const [initErrors, setInitErrors] = useState({})

  const formSubmitAction = values => {
    console.log(values)
  };


  const { values, errors, fieldChange } = useFormDataValidation(
    formInitialValues,
    initErrors,
    formSubmitAction,
    fieldValidators
  )

  const handleSubmit = () => {
    console.log('Submit', formData);
  };


  return (
    <Collapsable
      title="Payment"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="flex flex-col">
        <div className="payment-textbox-inner-width" autoCorrect="off">
          <div className="relative">
            <TextFieldWithLabel
              label="Card Details"
              type="cc-card"
              placeholder="1234 1234 1234 1234"
              name="payment.card_number"
              value={payment.card_number}
              onChange={(value) => {
                handleChange(value)
              }}
              required={true}
              onblur={(event) => fieldChange(event, 'card_number')}
            />
            <Card valid={valid} formData={formData}  Card1={Card1} Card2={Card2} Card3={Card3} Discover={Discover} MasterCard={MasterCard} Visa={Visa} />
          </div>
          {/* <p style={{fontSize: '14px', padding: '0 10px', color: '#c53030'}}>{errors.card_number}</p> */}
        </div>
      </div>
        <div className="payment-textbox-inner-width">
          <div style={{ display: 'flex' }}>
            <div className="relative" style={{ width: '50%' }}>
              <TextFieldWithLabel
                placeholder="MM/YY"
                name="payment.expiry_at"
                // className="w-6/12"
                title="MM/YY"
                value={payment.expiry_at}
                max={5}
                required={true}
                onChange={(value) => {
                  handleChange(value)
                }}
                onblur={(event) => fieldChange(event, 'expiry_at')}
              />  
            </div>
            <div className="relative" style={{ width: '50%' }}>
              <TextFieldWithLabel
                placeholder="CVV"
                name="payment.cvv"
                // className="w-6/12"
                title="CVV"
                value={payment.cvv}
                required={true}
                onChange={(value) => {
                  handleChange(value)
                }}
                max={4}
                onblur={(event) => fieldChange(event, 'cvv')}
              />
             <CVVIMG valid={valid} formData={formData}  Card1={Card1} Card2={Card2} Card3={Card3} Discover={Discover} MasterCard={MasterCard} Visa={Visa} />  
            </div>
          </div>
          <div style={{display: 'flex'}}>
          {/* <p style={{fontSize: '14px', padding: '0 10px', color: '#c53030'}}>{errors.expiry_at}</p>
          <p style={{fontSize: '14px', padding: '0 16px', color: '#c53030'}}>{errors.cvv}</p> */}
          </div>
        </div>
      <div className="flex flex-col">
        <div className="payment-textbox-inner-width">
          <div className="relative">
            <TextFieldWithLabel
              label="Name on card"
              placeholder=""
              required={false}
              name="payment.name"
              value={payment.name}
              onChange={(value) => {
                handleChange(value)
              }}
              onBlur={(event) => fieldChange(event, 'name')}
            />
            {/* <p className="error">{errors.name}</p> */}
          </div>
        </div>
      </div>
      {/* <div className="mt-4">
        <div className="delivery-frequency">Your's:</div>
      </div> */}
      <div className="flex flex-col">
        <div className="payment-textbox-inner-width">
          <div className="relative">
            <TextFieldWithLabel
              label="Phone number"
              name="payment.phone"
              value={payment.phone}
              required={true}
              onChange={(value) => {
                handleChange(value)
              }}
              onblur={(event) => fieldChange(event, 'phone')}
            />
            {/* <p className="error">{errors.phone}</p> */}
          </div>
        </div>
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <TextFieldWithLabel
              label="Email address"
              name="payment.email"
              value={payment.email}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              required={true}
              onChange={(value) => {
                handleChange(value)
              }}
              onblur={(event) => fieldChange(event, 'email')}
            />
            {/* <p className="error">{errors.email}</p> */}
          </div>
        </div>
      </div>
      {!delivery.is_used_same_address_for_billing ? (
        <>
          <div className="mt-4">
            <div className="delivery-frequency">Billing address:</div>
          </div>
          <div className="flex flex-col flex-wrap">
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel
                  label="Full name"
                  name="payment.billing_fullname"
                  value={payment.billing_fullname}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div className="md:w-1/2 pr-1">
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
            </div> */}
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel
                  label="UK Postcode"
                  name="payment.billing_postcode"
                  value={payment.billing_postcode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel
                  label="Address line 1"
                  name="payment.billing_address_1"
                  value={payment.billing_address_1}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel
                  label="Address line 2"
                  name="payment.billing_address_2"
                  value={payment.billing_address_2}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel
                  label="Town / City"
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
const Card = ({ formData, valid, Visa,MasterCard,Discover, Card1, Card2, Card3 }) => {
  const cardValidator = valid.number(formData.payment['card_number'], { luhnValidateVisaCard: false });
  if (cardValidator.card) {
    return (
      <div className="payment-card-img">
        <img className="" src={cardValidator.card && cardValidator.card.type && cardValidator.card.type === 'mastercard' ? MasterCard : Card1}  alt="card1" />
        <img className="" src={cardValidator.card && cardValidator.card.type && cardValidator.card.type === 'discover' ? Discover : Card2}  alt="card2" />
        <img className="" src={cardValidator.card && cardValidator.card.type && cardValidator.card.type === 'visa' ? Visa : Card3} alt="card3" />
      </div>
    )
  }
    return (
      <>
        <div className="payment-card-img">
          <img className="" src={Card1} alt="card1" />
          <img className="" src={Card2} alt="card2" />
          <img className="" src={Card3} alt="card3" />
        </div>
      </>
    )
}
const CVVIMG = ({formData, valid, Visa,MasterCard,Discover, Card1, Card2, Card3}) => {
  const cardValidator = valid.number(formData.payment['card_number'], { luhnValidateVisaCard: false });
  if (cardValidator.card) {
    return (
      <div className="payment-card-img">
      <img className="" src={cardValidator.card && cardValidator.card.type && cardValidator.card.type === 'mastercard' ? MasterCard
      : cardValidator.card && cardValidator.card.type && cardValidator.card.type  === 'visa' ? Visa 
      : cardValidator.card && cardValidator.card.type && cardValidator.card.type  === 'discover' ? Discover : Card1 } alt="cvv" />
    </div>
    )
  }
  return (
    <div className="payment-card-img">
    <img className="" src={Card1} alt="card1" />
  </div>
  )
}


