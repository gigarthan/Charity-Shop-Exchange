import React from 'react';
import Charity from './Checkout/Charity';
import Selection from './Checkout/Selection';
import ContactDetails from './Checkout/ContactDetails';
import Payment from './Checkout/Payment';
import genres from '../../import/planList'; 

export default function PlanSelection() {
  return (
    <div className="model-child-main">
      <Charity></Charity>
      <Selection genres={genres}></Selection>
      <ContactDetails></ContactDetails>
      <Payment></Payment>
    </div>
  );
}
