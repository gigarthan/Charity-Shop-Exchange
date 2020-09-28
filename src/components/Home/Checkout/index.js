import React, { useState } from 'react';

import Charity from './Charity';
import DeliveryDetails from './DeliveryDetails';
import Footer from './Footer';
import Payment from './Payment';

import Selection from './Selection';

import plansList from '~/import/plans-list.json';

export default function PlanSelection(props) {
  const { formData, onChange, className = '', readOnly, isHide } = props;

  return (
    <div className={className}>
      <div className="model-child-main">
        <Charity
          handleChange={onChange}
          formData={formData}
          readOnly={readOnly}
          isHide={isHide}
        />
        <Selection
          genres={plansList}
          handleChange={onChange}
          formData={formData}
        />

        <DeliveryDetails handleChange={onChange} formData={formData} />
        {/* <ContactDetails handleChange={onChange} formData={formData} /> */}
        <Payment handleChange={onChange} formData={formData} />
      </div>
      <Footer handleChange={onChange} formData={formData} />
    </div>
  );
}
