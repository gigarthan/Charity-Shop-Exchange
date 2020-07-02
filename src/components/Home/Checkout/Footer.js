import React, { useState } from 'react';
import ModalButton from './ModalButton';
import Logo from '../../../assets/img/cse_logo.png';
import billsbyConfig from '../../../import/billsby';

export default function Footer(props) {
  const { formData, handleChange } = props;

  const billsbyData = {
    productId: billsbyConfig.standardProduct,
    planId: billsbyConfig.standardPlan,
    cycleId: billsbyConfig.cycles.monthly,
    itemDetails: null,
    itemCount: 0,
  };

  React.useEffect(() => {
    let localItemDetails = '';
    let localCycleId = billsbyConfig.cycles.monthly;
    let localItemCount = 0;

    if (formData) {
      if (formData && formData.checkoutItems) {
        const keys = ['books', 'dvd'];
        // eslint-disable-next-line no-restricted-syntax
        for (const key of keys) {
          if (formData.checkoutItems[key]) {
            // eslint-disable-next-line no-restricted-syntax
            for (const item of formData.checkoutItems[key]) {
              localItemDetails += `${item.id}:${item.quantity}|`;
              localItemCount += item.quantity;
            }
          }
        }
      }
      const cycleValue =
        formData.delivery && formData.delivery.subscription
          ? formData.delivery.subscription
          : null;
      if (cycleValue === 'week') {
        localCycleId = billsbyConfig.cycles.weekly;
      } else if (cycleValue === 'month') {
        localCycleId = billsbyConfig.cycles.monthly;
      } else if (cycleValue === 'other week') {
        localCycleId = billsbyConfig.cycles.biweekly;
      }
    }
    if (localItemDetails) {
      localItemDetails = localItemDetails.slice(0, localItemDetails.length - 1);
    }

    if (localItemDetails !== billsbyData.itemDetails) {
      billsbyData.itemDetails = localItemDetails;
    }

    if (billsbyData.cycleId !== localCycleId) {
      billsbyData.cycleId = localCycleId;
    }

    if (billsbyData.itemCount !== localItemCount) {
      billsbyData.itemCount = localItemCount;
    }
  }, [formData]);

  let [newClass, setClassName] = useState('');
  let [button, changeButton] = useState('modal-button');

  const [quantity, setQuantity] = useState(true);
  const handleSubmit = () => {
    //setClassName('loader')//
    console.log('Submit', formData);
    console.log(billsbyData);
    let phone = formData.payment.phone;
    if (phone.startsWith('0')) phone = phone.slice(1);

    window.billsbyData = {
      firstName: formData.delivery.firstname,
      lastName: formData.delivery.lastname,
      email: formData.payment.email,
      billingAddressLine1: formData.delivery.address_1,
      billingAddressLine2: formData.delivery.address_2,
      billingAddressCity: formData.delivery.town,
      billingAddressState: 'Free Text',
      billingAddressZip: formData.delivery.postcode,
      billingAddressCountry: 'GBR',
      shippingAddressLine1: formData.delivery.address_1,
      shippingAddressLine2: formData.delivery.address_2,
      shippingAddressCity: formData.delivery.town,
      shippingAddressState: 'Free Text',
      shippingAddressZip: formData.delivery.postcode,
      shippingAddressCountry: 'GBR',
      phoneNumberDialCode: '44',
      phoneNumberDialCountry: 'GB',
      phoneNumber: phone,
      marketingConsent: formData.payment.isEmailedMe,
      customFields: [
        {
          customFieldId: 94,
          value: formData.charity.countryId,
        },
        {
          customFieldId: 95,
          value: formData.charity.charityId,
        },
        {
          customFieldId: 135,
          value: billsbyData.itemDetails,
        },
      ],
    };
    setTimeout(() => {
      console.log('Trigger scan');
      window.scanDomBillsby()
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
  };
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
  //['card_number', 'cvv', 'email', 'expiry_at', 'name', 'phone']

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
        newClass={newClass}
        billsbyData={billsbyData}
        totalDecimalSum={totalDecimalSum}
      />
      <a
        style={{ display: 'none' }}
        id="billsbyTriggerAnchor"
        data-billsby-type="checkout"
        data-billsby-product={billsbyData.productId}
        data-billsby-plan={billsbyData.planId}
        data-billsby-cycle={billsbyData.cycleId}
        data-billsby-units={orderSummary.quantity}>
        Subscribe
      </a>
    </div>
  );
}
const Selection = ({ orderSummary, handleSubmit, handleChange }) => {
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
    <>
      {quantity ? (
        <span className="p">
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
        disabled={!isEnabled}
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
          <div className={newClass}></div>
        </>
      </ModalButton>
    </>
  );
};
