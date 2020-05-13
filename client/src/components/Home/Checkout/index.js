import React from 'react';
import Charity from './Charity';
import Selection from './Selection';
import ContactDetails from './ContactDetails';
import Payment from './Payment';
import genres from '../../../import/planList'; 

export default function PlanSelection() {
  return (
    <div className="model-child-main">
      <Charity />
      <Selection genres={genres} />
      <ContactDetails />
      <Payment />
    </div>
  );
}
