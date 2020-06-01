import React from 'react';
import ModalButton from './ModalButton'
import Logo from '../../../assets/img/cse_logo.png'

export default function Footer(props) {
  const { formData, handleChange } = props

  const handleSubmit = () => {
    console.log('Submit', formData);
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
      <Subscription text="delivered every" formData={formData} orderSummary={orderSummary} handleSubmit={handleSubmit} handleChange={handleChange} totalDecimalSum={totalDecimalSum} />
    </div>

  )
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
const Subscription = ({ formData, orderSummary, handleSubmit, handleChange, totalDecimalSum, text }) => {
  if (typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true) {
    return null
  } else if(formData.delivery.address_1 === '' && orderSummary.quantity >= 2) {
    return (
      <>
      <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
      <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Delivery Details</span></ModalButton>
    </>
    )
  } else if(formData.delivery.fullname === '' && orderSummary.quantity >= 2) {
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
      } else if (formData.payment.town === '' && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
  } else if (formData.payment.cvv === '' && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
  } else if (formData.payment.email === '' && formData.payment.email !== null && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
  } else if (formData.payment.expiry_at === '' && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true}  handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
  } else if (formData.payment.name === '' && orderSummary.quantity >= 2) {
    return (
      <>
        <span className="p"><a className="s">{orderSummary.quantity} items</a> {text} <a className="s2">{formData.delivery.subscription}</a></span>
        <ModalButton className="modal-button-disabled tooltiptext" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange}><><span className="sum">£{totalDecimalSum}</span></> Subscribe<span className="tooltiptext">Enter Payment Details</span></ModalButton>
      </>
    )
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