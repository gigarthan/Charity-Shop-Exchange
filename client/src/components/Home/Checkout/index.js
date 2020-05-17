import React, { useState, useEffect } from 'react';
import Charity from './Charity';
import Selection from './Selection';
import ContactDetails from './ContactDetails';
import DeliveryDetails from './DeliveryDetails';
import Payment from './Payment';
import genres from '../../../import/planList'; 

export default function PlanSelection(props) {

  const {formData, onChange} = props;

  return (
    <div className="model-child-main">
      <Charity />
      <Selection genres={genres} />
      <DeliveryDetails handleChange={onChange} formData={formData}/>
      <ContactDetails />
      <Payment />
    </div>
  );
}
