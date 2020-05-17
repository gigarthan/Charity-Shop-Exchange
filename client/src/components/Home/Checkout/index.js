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
      <Charity handleChange={onChange} formData={formData} />
      <Selection genres={genres} handleChange={onChange} formData={formData} />
      <DeliveryDetails handleChange={onChange} formData={formData}/>
      <ContactDetails handleChange={onChange} formData={formData} />
      <Payment handleChange={onChange} formData={formData} />
    </div>
  );
}
