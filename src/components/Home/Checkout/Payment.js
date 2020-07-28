import React, { useState, useEffect, useLayoutEffect } from 'react';

import Card1 from '../../../assets/img/card1.png';
import Card2 from '../../../assets/img/card2.png';
import Card3 from '../../../assets/img/card3.png';
import Discover from '../../../assets/img/icons8-discover.svg';
import MasterCard from '../../../assets/img/icons8-mastercard.svg';
import Visa from '../../../assets/img/icons8-visa.svg';

import useFormDataValidation, {
  isRequiredPayment,
  validNumber,
  isValidCardName,
  isValidEmail,
  validCreditCard,
  validCvv,
  validDate,
  phoneNumber,
} from '../../../hooks/useFormDataValidation';
import TextFieldWithLabel from '../../TextFieldWithLabel';
import Collapsable from '../Collapsable';
import EmailMeWhenSubscribed from './EmailMeWhenSubscribed';

const valid = require('card-validator');

export default function Payment(props) {
  const { formData, handleChange } = props;
  const { payment, delivery } = formData;
  const [isOpen, setisOpen] = useState(true);

  useLayoutEffect(() => {
    try {
    window.billsbyTokens.init("billsby-number", "billsby-cvv");
    } catch (err) {
      console.error(err);
    }
  }, [])


  const fieldValidators = {
    phone: [isRequiredPayment, validNumber],
    email: [isRequiredPayment, isValidEmail],
    card_number: [isRequiredPayment, validCreditCard],
    expiry_at: [isRequiredPayment, validDate],
    cvv: [isRequiredPayment, validCvv],
    name: [isRequiredPayment, isValidCardName],
  };
  const [initErrors, setInitErrors] = useState({});

  const formSubmitAction = (values) => {
    console.log(values);
  };

  const { values, errors, fieldChange } = useFormDataValidation(
    formData,
    initErrors,
    formSubmitAction,
    fieldValidators,
  );

  const handleSubmit = () => {
    console.log('Submit', formData);
  };

  return (
    <Collapsable
      title="Payment"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}>
      <form id="payment-form" action="https://www.billsby.com/">
        
        <div className="flex flex-col">
          <div className="payment-textbox-inner-width" autoCorrect="off">
            <div className="relative">
              <TextFieldWithLabel
                autocomplete="cc-number"
                type="cc-number"
                label="Card details"
                htmlFor="cc-number"
                placeholder="1234 1234 1234 1234"
                name="cc-number"
                pattern="[0-9\s]{13,19}"
                max={16}
                id="billsby-number"
                keyToUpdate="payment.card_number"
                value={payment.card_number}
                onChange={(value) => {
                  handleChange(value);
                }}
                required
                onblur={(event) => fieldChange(event, 'card_number')}
              />
              <Card
                valid={valid}
                formData={formData}
                Card1={Card1}
                Card2={Card2}
                Card3={Card3}
                Discover={Discover}
                MasterCard={MasterCard}
                Visa={Visa}
              />
            </div>
            {/* <p style={{fontSize: '14px', padding: '0 10px', color: '#c53030'}}>{errors.card_number}</p> */}
          </div>
        </div>
        <div className="payment-textbox-inner-width">
          <div style={{ display: 'flex' }}>
            <div className="relative" style={{ width: '50%' }}>
              <TextFieldWithLabel
                autocomplete="cc-exp"
                type="cc-exp"
                placeholder="MM/YY"
                name="cc-exp"
                mask="00/0000"
                keyToUpdate="payment.expiry_at"
                // className="w-6/12"
                title="MM/YY"
                value={payment.expiry_at}
                pattern="(1[0-2]|0[1-9])\/(1[5-9]|2\d)"
                s
                max={5}
                required
                onChange={(value) => {
                  handleChange(value);
                }}
                onblur={(event) => fieldChange(event, 'expiry_at')}
              />
            </div>
            <div className="relative" style={{ width: '50%' }}>
              <TextFieldWithLabel
                autocomplete="cc-csc"
                placeholder="CVV"
                type="cc-csc"
                id="billsby-cvv"
                name="cc-csc"
                keyToUpdate="payment.cvv"
                // className="w-6/12"
                title="CVV"
                value={payment.cvv}
                required
                onChange={(value) => {
                  handleChange(value);
                }}
                max={4}
                onblur={(event) => fieldChange(event, 'cvv')}
              />
              <CVVIMG
                valid={valid}
                formData={formData}
                Card1={Card1}
                Card2={Card2}
                Card3={Card3}
                Discover={Discover}
                MasterCard={MasterCard}
                Visa={Visa}
              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            {/* <p style={{fontSize: '14px', padding: '0 10px', color: '#c53030'}}>{errors.expiry_at}</p>
          <p style={{fontSize: '14px', padding: '0 16px', color: '#c53030'}}>{errors.cvv}</p> */}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="payment-textbox-inner-width">
            <div className="relative">
              <TextFieldWithLabel
                autocomplete="cc-name"
                type="cc-name"
                label="Name on card"
                placeholder=""
                required={false}
                name="cc-name"
                id="full_name"
                keyToUpdate="payment.name"
                value={payment.name}
                onChange={(value) => {
                  handleChange(value);
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
                autocomplete="number"
                label="Phone number"
                name="number"
                type="number"
                keyToUpdate="payment.phone"
                value={payment.phone}
                onChange={(value) => {
                  handleChange(value);
                }}
                title="May be used to assist delivery"
                onblur={(event) => fieldChange(event, 'phone')}
              />
              <p className="error">
                {payment.phone &&
                  payment.phone.length > 0 &&
                  validNumber(payment.phone)}
              </p>
            </div>
          </div>
          <div className="payment-textbox-inner-width ">
            <div className="relative">
              <TextFieldWithLabel
                autocomplete="email"
                label="Email"
                type="email"
                name="email"
                keyToUpdate="payment.email"
                value={payment.email}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                required
                error={
                  payment.email &&
                  payment.email.length > 0 &&
                  isValidEmail(payment.email)
                }
                onChange={(value) => {
                  handleChange(value);
                }}
                onblur={(event) => fieldChange(event, 'email')}
              />
            </div>
          </div>
          <div
            className="mt-4"
            style={{ color: '#696969', padding: '0 8px', margin: 0 }}>
            <EmailMeWhenSubscribed
              keyToUpdate="payment.isEmailedMe"
              onChange={(value) => {
                handleChange(value);
              }}
              lable="Yes, email me about special offers and new product information"
            />
          </div>
        </div>
        {!delivery.is_used_same_address_for_billing ? (
          <>
            <div className="mt-4">
              <div className="delivery-frequency">Billing address:</div>
            </div>
            <div className="flex flex-col flex-wrap">
              {/* <div className="md:w-1/2 pr-1">
              <div className="relative">
                <TextFieldWithLabel
                  label="Full name"
                  name="payment.billing_fullname"
                  value={payment.billing_fullname}
                  onChange={handleChange}
                />
              </div>
            </div> */}
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete="name"
                    label="First name"
                    name="name"
                    type="name"
                    keyToUpdate="payment.billing_firstname"
                    value={payment.billing_firstname}
                    pattern=".{2,}"
                    required
                    error={
                      values.billing_firstname &&
                      values.billing_firstname.length > 0 &&
                      !/^.{2,}$/.test(values.billing_firstname) &&
                      'Please enter recipients first name'
                    }
                    onChange={handleChange}
                    onblur={(event) => fieldChange(event, 'billing_firstname')}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete="name"
                    label="Last name"
                    type="name"
                    name="name"
                    keyToUpdate="payment.billing_lastname"
                    value={payment.billing_lastname}
                    pattern=".{2,}"
                    required
                    error={
                      values.billing_lastname &&
                      values.billing_lastname.length > 0 &&
                      !/^.{2,}$/.test(values.billing_lastname) &&
                      'Please enter recipients last name'
                    }
                    onChange={handleChange}
                    onblur={(event) => fieldChange(event, 'billing_lastname')}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete="postal-code"
                    label="UK Postcode"
                    name="postal-code"
                    type="postal-code"
                    max={8}
                    keyToUpdate="payment.billing_postcode"
                    required
                    value={payment.billing_postcode}
                    pattern="^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$"
                    error={
                      values.billing_postcode &&
                      values.billing_postcode.length > 0 &&
                      !/^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/.test(
                        values.billing_postcode,
                      ) &&
                      'Please enter a valid postcode'
                    }
                    onblur={(event) => fieldChange(event, 'billing_postcode')}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete="address-line1"
                    label="Address line 1"
                    name="address-line1"
                    type="address-line1"
                    keyToUpdate="payment.billing_address_1"
                    required
                    max={255}
                    pattern=".{1,}"
                    error={
                      values.billing_address_1 &&
                      values.billing_address_1.length > 0 &&
                      !/^.{1,}$/.test(values.billing_address_1) &&
                      'Please enter a valid address'
                    }
                    value={payment.billing_address_1}
                    onblur={(event) => fieldChange(event, 'billing_address_1')}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete="address-line2"
                    label="Address line 2"
                    type="address-line2"
                    name="address-line2"
                    max={255}
                    keyToUpdate="payment.billing_address_2"
                    value={payment.billing_address_2}
                    onblur={(event) => fieldChange(event, 'billing_address_2')}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete="address-level1"
                    label="Town / City"
                    name="address-level1"
                    type="address-level1"
                    keyToUpdate="payment.billing_town"
                    max={35}
                    pattern=".{2,}"
                    required
                    error={
                      values.billing_town &&
                      values.billing_town.length > 0 &&
                      !/^.{2,}$/.test(values.billing_town) &&
                      'Please enter the postal town or city'
                    }
                    value={payment.billing_town}
                    onblur={(event) => fieldChange(event, 'billing_town')}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-1">
                <div className="relative">
                  <TextFieldWithLabel
                    autocomplete=""
                    type="county"
                    label="County"
                    max={35}
                    required
                    keyToUpdate="payment.billing_county"
                    value={payment.billing_county}
                    onblur={(event) => fieldChange(event, 'billing_county')}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </form>
      {/* <div className="mt-4">
      <Button theme="small" onClick={handleSubmit}>
        Place Order
      </Button>
    </div> */}

    </Collapsable>
  );
}
const Card = ({
  formData,
  valid,
  Visa,
  MasterCard,
  Discover,
  Card1,
  Card2,
  Card3,
}) => {
  const cardValidator = valid.number(formData.payment.card_number, {
    luhnValidateVisaCard: false,
  });
  if (cardValidator.card) {
    return (
      <div className="payment-card-img">
        <img
          className=""
          src={
            cardValidator.card &&
              cardValidator.card.type &&
              cardValidator.card.type === 'mastercard'
              ? MasterCard
              : Card1
          }
          alt="card1"
        />
        <img
          className=""
          src={
            cardValidator.card &&
              cardValidator.card.type &&
              cardValidator.card.type === 'discover'
              ? Discover
              : Card2
          }
          alt="card2"
        />
        <img
          className=""
          src={
            cardValidator.card &&
              cardValidator.card.type &&
              cardValidator.card.type === 'visa'
              ? Visa
              : Card3
          }
          alt="card3"
        />
      </div>
    );
  }
  return (
    <>
      <div className="payment-card-img">
        <img className="" src={Card1} alt="card1" />
        <img className="" src={Card2} alt="card2" />
        <img className="" src={Card3} alt="card3" />
      </div>
    </>
  );
};
const CVVIMG = ({
  formData,
  valid,
  Visa,
  MasterCard,
  Discover,
  Card1,
  Card2,
  Card3,
}) => {
  const cardValidator = valid.number(formData.payment.card_number, {
    luhnValidateVisaCard: false,
  });
  if (cardValidator.card) {
    return (
      <div className="payment-card-img">
        <img
          className=""
          src={
            cardValidator.card &&
              cardValidator.card.type &&
              cardValidator.card.type === 'mastercard'
              ? MasterCard
              : cardValidator.card &&
                cardValidator.card.type &&
                cardValidator.card.type === 'visa'
                ? Visa
                : cardValidator.card &&
                  cardValidator.card.type &&
                  cardValidator.card.type === 'discover'
                  ? Discover
                  : Card1
          }
          alt="cvv"
        />
      </div>
    );
  }
  return (
    <div className="payment-card-img">
      <img className="" src={Card1} alt="card1" />
    </div>
  );
};
