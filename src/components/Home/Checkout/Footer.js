import React, { useState } from 'react';

import Logo from '../../../assets/img/cse_logo.png';
import ModalButton from './ModalButton';

export default function Footer(props) {
  const { formData, handleChange } = props;
  //   const { payment, delivery, charity } = formData;
  const [isReady] = useState(false);

  const [newClass] = useState('');
  const [button] = useState('modal-button');

  const [quantity] = useState(true);

  // Card Tokenizer...
  // useEffect(() => {
  //     window.billsbyTokens.on('ready', function() {
  //       setIsReady(true);
  //     });
  //     window?.billsbyTokens.on("paymentMethod", function (token, pmData) {

  //       console.log('make axios here');
  //     });
  // }, []);
  // const handleSubmit = useCallback(() => {
  //   const requiredFields = {
  //     full_name: formData.payment.name,
  //     month: formData.payment.expiry_at.split('/')[0],
  //     year: formData.payment.expiry_at.split('/')[1],
  //   };

  //   window?.billsbyTokens.tokenizeCreditCard(requiredFields);

  // //setClassName('loader')//
  // console.log('Submit', formData);
  // console.log(billsbyData);
  // //let phone = formData.payment.phone;
  // //if (phone.startsWith('0')) phone = phone.slice(1);

  // window.billsbyData = {
  //   firstName: delivery.firstname,
  //   lastName: delivery.lastname,
  //   email: payment.email,
  //   billingAddressLine1: delivery.address_1,
  //   billingAddressLine2: delivery.address_2,
  //   billingAddressCity: delivery.town,
  //   billingAddressState: 'Free Text',
  //   billingAddressZip: delivery.postcode,
  //   billingAddressCountry: 'GBR',
  //   shippingAddressLine1: delivery.address_1,
  //   shippingAddressLine2: delivery.address_2,
  //   shippingAddressCity: delivery.town,
  //   shippingAddressState: 'Free Text',
  //   shippingAddressZip: delivery.postcode,
  //   shippingAddressCountry: 'GBR',
  //   phoneNumberDialCode: '44',
  //   phoneNumberDialCountry: 'GB',
  //   phoneNumber: payment.phone,
  //   marketingConsent: payment.isEmailedMe,
  //   customFields: [
  //     {
  //       customFieldId: 94,
  //       value: charity.countryId,
  //     },
  //     {
  //       customFieldId: 95,
  //       value: charity.charityId,
  //     },
  //     {
  //       customFieldId: 135,
  //       value: billsbyData.itemDetails,
  //     },
  //   ],
  // };
  setTimeout(() => {
    console.log('Trigger scan');
    // window.scanDomBillsby();
    setTimeout(() => {
      const elem = document.getElementById('billsbyTriggerAnchor');
      console.log(elem);
      if (elem) {
        console.log('Click elem');
        elem.click();
      } // else {
      //  setClassName('')
      // setQuantity(false)
      // setClassName('checkmark draw')
      // changeButton('modal-button d')
      // document.getElementById("footer").classList.add('footer');
      // document.getElementById("modal").classList.add('completed');
      // }
    }, 500);
  }, 500);

  const books = formData.checkoutItems.books.filter(
    (item) => item.quantity !== 0,
  );
  const dvd = formData.checkoutItems.dvd.filter((item) => item.quantity !== 0);
  const total = books.concat(dvd);
  const orderSummary = total.reduce((itemQuantity, item) => {
    for (const [orderName, orderCount] of Object.entries(item)) {
      if (!itemQuantity[orderName]) {
        itemQuantity[orderName] = 0;
      }

      itemQuantity[orderName] += orderCount;
    }
    return itemQuantity;
  }, {});

  const totalSum = total.reduce((sum, i) => {
    const totalSum = (sum += i.quantity * 2.0);
    return totalSum;
  }, 3.5);

  const totalDecimalSum = (Math.round(totalSum * 100) / 100).toFixed(2);

  const keysToLook = ['address_1', 'firstname', 'lastname', 'postcode', 'town'];
  const keysToLook2 = ['phone', 'email'];

  // ['card_number', 'cvv', 'email', 'expiry_at', 'name', 'phone']

  const showToolTip = keysToLook.some((key) => formData.delivery[key] === '');
  const showToolTip2 = keysToLook2.some((key) => formData.payment[key] === '');

  return (
    <div id="footer">
      <img
        className="h-10 md:h-12 img-logo"
        src={Logo}
        alt="Charity Shop Exchange"
      />
      <Selection
        orderSummary={orderSummary}
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
        orderSummary={orderSummary}
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
    <div className="flex flex-wrap justify-center w-full">
      {quantity ? (
        <span className="justify-center flex-grow text-lg text-center p">
          <a href="#1" className="s">
            {orderSummary.quantity} items
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
