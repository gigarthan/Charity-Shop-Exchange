import React, { useState, useEffect, useCallback } from 'react';

import Logo from '../../../assets/img/cse_logo.png';
import billsbyConfig from '../../../import/billsby';
import ModalButton from './ModalButton';

export default function Footer(props) {
  const { formData, handleChange } = props;
  const { payment, delivery, charity } = formData;
  const [isReady, setIsReady] = useState(false);

  const [newClass, setClassName] = useState('');
  const [button, changeButton] = useState('modal-button');

  const [quantity, setQuantity] = useState(true);

  // Card Tokenizer...
  // useEffect(() => {
  //     window.billsbyTokens.on('ready', function() {
  //       setIsReady(true);
  //     });
  //     window?.billsbyTokens.on("paymentMethod", function (token, pmData) {

  //       console.log('make axios here');
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

  const books = formData.checkoutItems.books.filter(
    (item) => item.quantity !== 0,
  );
  const dvd = formData.checkoutItems.dvd.filter((item) => item.quantity !== 0);
  const total = books.concat(dvd);
  const orderSummary = total.reduce((quantity, item) => {
    for (const [orderName, orderCount] of Object.entries(item)) {
      if (!quantity[orderName]) {
        quantity[orderName] = 0;
      }

      quantity[orderName] += orderCount;
    }
    return quantity;
  }, {});

  const totalSum = total.reduce((sum, i) => (sum += i.quantity * 2.0), 3.5);
  const totalDecimalSum = (Math.round(totalSum * 100) / 100).toFixed(2);

  const keysToLook = ['address_1', 'firstname', 'lastname', 'postcode', 'town'];
  const keysToLook2 = ['phone', 'email'];

  // ['card_number', 'cvv', 'email', 'expiry_at', 'name', 'phone']

  const showToolTip = keysToLook.some((key) => formData.delivery[key] === '');
  const showToolTip2 = keysToLook2.some((key) => formData.payment[key] === '');

  return (
    <div className="modal-footer" id="footer">
      <img
        className="h-10 md:h-12 img-logo"
        src={Logo}
        alt="Charity Shop Exchange"
      />
      <Selection
        orderSummary={orderSummary}
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Subscription
        text="delivered every"
        formData={formData}
        button={button}
        showToolTip={showToolTip}
        showToolTip2={showToolTip2}
        quantity={quantity}
        orderSummary={orderSummary}
        handleSubmit={handleSubmit}
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
        data-billsby-plan={billsbyData.planId}
        data-billsby-cycle={billsbyData.cycleId}
        data-billsby-units={orderSummary.quantity}>
        Subscribe
      </a> */}
    </div>
  );
}
const Selection = ({ orderSummary, handleSubmit, handleChange, isReady }) => {
  if (orderSummary.quantity >= 2) {
    return null;
  }
  if (orderSummary.quantity >= 1) {
    return (
      <>
        <ModalButton
          className="modal-button-disabled"
          disabled={
            typeof orderSummary.quantity !== 'undefined'
              ? orderSummary.quantity < 2
              : true
          }
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
        disabled={
          typeof orderSummary.quantity !== 'undefined'
            ? orderSummary.quantity < 2
            : true
        }
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
  orderSummary,
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
  if (
    typeof orderSummary.quantity !== 'undefined'
      ? orderSummary.quantity < 2
      : true
  ) {
    return null;
  }
  return (
    <div className="w-full flex justify-center flex-wrap">
      {quantity ? (
        <span className="p text-lg justify-center text-center flex-grow">
          <a className="s">{orderSummary.quantity} items</a>delivered every
          <a className="s2">{formData.delivery.subscription}</a>
        </span>
      ) : (
        <div className="fade-in">
          <span>Thank You! An email confirmation has been sent.</span>
        </div>
      )}
      <ModalButton
        className={modalButtonClassName}
        type="button"
        disabled={false}
        onClick={handleSubmit}
        handleChange={handleChange}>
        <>
          {quantity ? (
            <span className="sum">£{totalDecimalSum} Subscribe</span>
          ) : (
            <span className="subscribe">Subscribed</span>
          )}
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
