import React from 'react';
import ModalButton from './ModalButton'
import Logo from '../../../assets/img/cse_logo.png'
import billsbyConfig from "../../../import/billsby";

export default function Footer(props) {
  const { formData, handleChange } = props
  
  const billsbyData = {
    productId: billsbyConfig.standardProduct,
    planId: billsbyConfig.standardPlan,
    cycleId: billsbyConfig.cycles.monthly,
    itemDetails: null,
    itemCount: 0,
  };

  React.useEffect(() => {
    let localItemDetails = "";
    let localCycleId = billsbyConfig.cycles.monthly;
    let localItemCount = 0;

    if (formData) {
      if (formData && formData.checkoutItems) {
        const keys = ["books", "dvd"];
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
      if (cycleValue === "week") {
        localCycleId = billsbyConfig.cycles.weekly;
      } else if (cycleValue === "month") {
        localCycleId = billsbyConfig.cycles.monthly;
      } else if (cycleValue === "other week") {
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


  const handleSubmit = () => {
    console.log("Submit", formData);
    console.log(billsbyData);
    window.billsbyData = {
      firstName: formData.delivery.firstname,
      lastName: formData.delivery.lastname,
      email: formData.payment.email,
      billingAddressLine1: formData.delivery.address_1,
      billingAddressLine2: formData.delivery.address_2,
      billingAddressCity: formData.delivery.town,
      billingAddressState: formData.delivery.county,
      billingAddressZip: formData.delivery.postcode,
      billingAddressCountry: "GB",
      shippingAddressLine1: formData.delivery.address_1,
      shippingAddressLine2: formData.delivery.address_2,
      shippingAddressCity: formData.delivery.town,
      shippingAddressState: formData.delivery.county,
      shippingAddressZip: formData.delivery.postcode,
      shippingAddressCountry: "GB",
      phoneNumber: formData.payment.phone,
      marketingConsent: formData.payment.isEmailedMe,
      customFields: [{
        customFieldId: 94 ,
        value: formData.charity.countryId
      },
      {
        customFieldId: 95 ,
        value: formData.charity.charityId
      },
      {
        customFieldId: 135 ,
        value: billsbyData.itemDetails
      }]
    };

    console.log(window.billsbyData);
    setTimeout(() => {
      console.log("Trigger scan");
      window.scanDomBillsby();
      setTimeout(() => {
        const elem = document.getElementById("billsbyTriggerAnchor");
        console.log(elem);
        if (elem) {
          console.log("Click elem");
          elem.click();
        }
      }, 500);
    }, 500);
  };
  
  const books = formData.checkoutItems.books.filter(item => item.quantity !== 0);
  const dvd = formData.checkoutItems.dvd.filter(item => item.quantity !== 0);

  const total = books.concat(dvd)

  const orderSummary = total.reduce((quantity, item) => {
    for (const [orderName, orderCount] of Object.entries(item)) {
      if (!quantity[orderName]) {
        quantity[orderName] = 0;
      }

      quantity[orderName] += orderCount
    }
    return quantity
  }, {});

  console.log(orderSummary)

  const totalSum = total.reduce((sum, i) => (
    sum += i.quantity * 2.00
  ), 3.50)
  const totalDecimalSum = (Math.round(totalSum * 100) / 100).toFixed(2);



  return (
    <div className="modal-footer">
      <img className="h-10 md:h-12 img-logo" src={Logo} alt="Charity Shop Exchange" />
      <Selection orderSummary={orderSummary} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Subscription text="delivered every" formData={formData} orderSummary={orderSummary} handleSubmit={handleSubmit} handleChange={handleChange} totalDecimalSum={totalDecimalSum} billsbyData={billsbyData} />
     <a
        style={{ display: "none" }}
        id="billsbyTriggerAnchor"
        href="#"
        data-billsby-type="checkout"
        data-billsby-product={billsbyData.productId}
        data-billsby-plan={billsbyData.planId}
        data-billsby-cycle={billsbyData.cycleId}
        data-billsby-units={orderSummary.quantity}
      >
        Subscribe
      </a>
  
    </div>
  );
}

const Selection = ({ orderSummary, formData, handleSubmit, handleChange }) => {
  if (orderSummary.quantity >= 2) {
    return null
  } if (orderSummary.quantity >= 1) {
    return (
      <>
        {/*<p className="p"><a className="s">{orderSummary.quantity} item</a> delivered every <a className="s2">{formData.delivery.subscription}</a></p>*/}
        <ModalButton className="modal-button-disabled" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange} text="Select 1 more item" />
      </>
    )
  }
  return (
    <>
      <ModalButton className="modal-button-disabled-2" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange} text="Select 2 more items" />
    </>
  )
}
const Subscription = ({ formData, orderSummary, handleSubmit, handleChange, totalDecimalSum, text, billsbyData }) => {
  if (typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true) {
    return null
  } else if(formData.delivery.address_1 === '' && orderSummary.quantity >= 2) {
    return (
 <>
      <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
      <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
    </>
    )
  } else if(formData.delivery.firstname === '' && orderSummary.quantity >= 2) {
    return (
      <>
      <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
      <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
    </>
    )
  }  else if(formData.delivery.lastname === '' && orderSummary.quantity >= 2) {
    return (
      <>
      <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
      <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
    </>
    )
  } else if(formData.delivery.postcode === '' && orderSummary.quantity >= 2) {
    return (
      <>
      <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
      <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
    </>
    )
     } else if(formData.delivery.postcode === '' && orderSummary.quantity >= 2) {
      return (
        <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
      </>
      )
      } else if (formData.delivery.town === '' && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
      </>
    )
//  }   else if (formData.payment.card_number === '' && orderSummary.quantity >= 2) {
//    return (
//      <>
//        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
//        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
//      </>
//    ) 
//    }else if (formData.payment.cvv === '' && orderSummary.quantity >= 2) {
//    return (
//      <>
//        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
//        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
//      </>
//    )
  } else if (formData.payment.email === '' && formData.payment.email !== null && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
//  } else if (formData.payment.expiry_at === '' && orderSummary.quantity >= 2) {
//    return (
//      <>
//        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
//        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
//      </>
//    )
//  } else if (formData.payment.name === '' && orderSummary.quantity >= 2) {
//    return (
//      <>
//        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
//        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
//      </>
//    )
  } else if (formData.payment.phone === '' && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
  } return (
    <>
      <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
      <ModalButton className="modal-button" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange}><><span className="sum">£{totalDecimalSum} Subscribe</span></></ModalButton>
    </>
  )
}
