import React, { useState, useEffect } from 'react';
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

  const orderSummary = total.reduce((orderSummary, summary) => {
    for (const [orderName, orderCount] of Object.entries(summary)) {
      if (!orderSummary[orderName]) {
        orderSummary[orderName] = 0;
      }

      orderSummary[orderName] += orderCount
    }
    return orderSummary
  }, {});
  

  const totalSum = total.reduce((sum,i) => (
    sum += i.quantity * 2 
  ),3.5)



  return (
    <div className="modal-footer">
      <img className="h-10 md:h-12 img-logo" src={Logo} alt="Charity Shop Exchange" />
      <Info orderSummary={orderSummary} formData={formData} totalSum={totalSum} text="items delivered" handleChange={handleChange} handleSubmit={handleSubmit} />
      <Selection orderSummary={orderSummary} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>

  )
}


const Info = ({ orderSummary, formData, text,handleSubmit,handleChange,totalSum }) => {
  if (typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true) {
    return null
  }
  return (
    <>
    <p className="p">{orderSummary.quantity} {text} {formData.delivery.subscription}</p>
    <ModalButton className="modal-button" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange}>£{totalSum} Subscribe</ModalButton>
    </> 
  )
}
const Selection = ({ orderSummary, formData,handleSubmit,handleChange }) => {
  if (orderSummary.quantity >= 2) {
    return null
  } if (orderSummary.quantity >= 1) {
    return (
      <>
      <p className="p">1 item delivered {formData.delivery.subscription}</p>
      <ModalButton className="modal-button-disabled" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange} text="Select 1 more item"></ModalButton>
      </>
    )
  }
  return (
    <>
    <ModalButton className="modal-button-disabled" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange} text="Select 2 more items"></ModalButton>
    </>
  )
}