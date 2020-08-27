import React  from 'react';

import genres from '../../../import/planList';
import Charity from './Charity';
import DeliveryDetails from './DeliveryDetails';
import Footer from './Footer';
import Payment from './Payment';
// eslint-disable-next-line import/no-named-as-default-member
import Selection from './Selection';

export default function PlanSelection(props) {
  const { formData, onChange, } = props;

  return (
    <>
      <div className="model-child-main">
        <Charity handleChange={onChange} formData={formData} />
        <Selection
          genres={genres}
          handleChange={onChange}
          formData={formData}
        />
        <DeliveryDetails handleChange={onChange} formData={formData} />
        {/* <ContactDetails handleChange={onChange} formData={formData} /> */}
        <Payment handleChange={onChange} formData={formData} />
      </div>
      <Footer handleChange={onChange} formData={formData} />
    </>
  );
}
