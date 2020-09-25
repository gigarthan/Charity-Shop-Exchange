import React, { useState, useEffect, useCallback } from 'react';

import Logo from '../../../assets/img/cse_logo.png';
import ModalButton from './ModalButton';

export default function Footer(props) {
  const { formData, handleChange } = props;
  const [isReady, setIsReady] = useState(false);

  const [newClass, setClassName] = useState('');
  const [button, changeButton] = useState('modal-button');

  const [quantity, setQuantity] = useState(true);

  const { checkoutItems } = formData;

  // Card Tokenizer...
  // useEffect(() => {
  //     window.billsbyTokens.on('ready', function() {
  //       setIsReady(true);
  //     });
  //     window?.billsbyTokens.on("paymentMethod", function (token, pmData) {

  //
  //     });
  // }, []);

  function handleSubmit() {
    const requiredFields = {
      full_name: formData.payment.name,
      month: formData.payment.expiry_at.split('/')[0],
      year: `20${formData.payment.expiry_at.split('/')[1]}`,
    };
    console.log(formData.payment);
    console.log(requiredFields);
    window.billsbyFormData = formData;
    window.billsbyTokens.tokenizeCreditCard(requiredFields);
  }

  console.log(formData);

  const keysToLook = ['address_1', 'firstname', 'lastname', 'postcode', 'town'];
  const keysToLook2 = ['phone', 'email'];

  // ['card_number', 'cvv', 'email', 'expiry_at', 'name', 'phone']

  const showToolTip = keysToLook.some((key) => formData.delivery[key] === '');
  const showToolTip2 = keysToLook2.some((key) => formData.payment[key] === '');

  const totalQuantity = checkoutItems.reduce((acc, { value }) => {
    return acc + value;
  }, 0);

  const totalDecimalSum = checkoutItems.reduce(
    /**
     * ? £7.5 for the first two items and then £2 per item
     */
    (acc, { value }) => Math.round((acc + value * 2.0) * 100) / 100,
    3.5,
  );

  return (
    <div className="modal-footer" id="footer">
      <img
        className="h-10 md:h-12 img-logo"
        src={Logo}
        alt="Charity Shop Exchange"
      />
      <Selection
        totalQuantity={totalQuantity}
        formData={formData}
        handleChange={handleChange}
      />
      <Subscription
        text="delivered every"
        formData={formData}
        button={button}
        showToolTip={showToolTip}
        showToolTip2={showToolTip2}
        quantity={quantity}
        totalQuantity={totalQuantity}
        handleChange={handleChange}
        isReady={isReady}
        newClass={newClass}
        // billsbyData={billsbyData}
        totalDecimalSum={totalDecimalSum}
      />
      {/* <a
        style={{ display: 'none' }}
        id="billsbyTriggerAnchor"
        data-billsby-type="checkout"
        data-billsby-product={billsbyData.productId}
        data-billsby-cycle={billsbyData.cycleId}
        data-billsby-plan={billsbyData.planId}
        data-billsby-units={orderSummary.quantity}>
        Subscribe
      </a> */}
    </div>
  );
}
const Selection = ({ totalQuantity, handleSubmit, handleChange, isReady }) => {
  if (totalQuantity >= 2) {
    return null;
  }
  if (totalQuantity >= 1) {
    return (
      <>
        <ModalButton
          className="modal-button-disabled"
          disabled={totalQuantity < 2 && true}
          onClick={handleSubmit}
          handleChange={handleChange}
          isReady={isReady}
          text="Select 1 more item"
        />
      </>
    );
  }
  return (
    <>
      <ModalButton
        className="modal-button-disabled-2"
        disabled={totalQuantity < 2 && true}
        onClick={handleSubmit}
        handleChange={handleChange}
        isReady={isReady}
        text="Select 2 more items"
      />
    </>
  );
};
const Subscription = ({
  formData,
  totalQuantity,
  newClass,
  button,
  handleSubmit,
  quantity,
  handleChange,
  showToolTip,
  showToolTip2,
  totalDecimalSum,
  isReady,
}) => {
  const modalButtonClassName = `${
    showToolTip2 || showToolTip ? 'modal-button-disabled' : button
  } `;
  const isEnabled = !showToolTip && !showToolTip2;
  if (totalQuantity < 2 && true) {
    return null;
  }
  return (
    <div className="flex flex-wrap justify-center w-full">
      {quantity ? (
        <span className="justify-center flex-grow text-lg text-center p">
          <a href="#1" className="s">
            {totalQuantity} items
          </a>
          delivered every
          <a href="#2" className="s2">
            {formData.delivery.subscription}
          </a>
        </span>
      ) : (
        <div className="fade-in">
          <span>Thank You! An email confirmation has been sent.</span>
        </div>
      )}
      <ModalButton
        className={modalButtonClassName}
        type="button"
        disabled={!isEnabled || !isReady}
        onClick={handleSubmit}
        handleChange={handleChange}>
        <>
          {quantity ? (
            <span className="sum">£{totalDecimalSum.toFixed(2)} Subscribe</span>
          ) : (
            <span className="subscribe">Subscribed</span>)}
          {showToolTip2 ? (
            <span className="tooltiptext">Enter Payment Details</span>
          ) : (
            ''
          )}
          {showToolTip ? (
            <span className="tooltiptext">Enter Delivery Details</span>
          ) : (
            ''
          )}
          <div className={newClass} />
        </>
      </ModalButton>
    </div>
  );
};
