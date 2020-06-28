import React, { useEffect } from 'react';

import Dialog from '~/components/Dialog';
import useDialog from '~/components/Dialog/useDialog';
import Checkout from '~/components/Home/Checkout/index';
import GetStartedForm from '~/components/Home/GetStartedForm';
import Hero from '~/components/Home/Hero';
import HowItWorks from '~/components/Home/HowItWorks';
import Mission from '~/components/Home/Mission';
import Register from '~/components/Home/Register';
import Subscribe from '~/components/Home/Subscribe';
import useFormData from '~/hooks/useFormData';
import items from '~/import/planList';

export default function Home() {
  const { isShowing, toggle } = useDialog();

  let planList = [];
  Object.values(items).forEach((list) => {
    planList = planList.concat(list.map((elem) => elem.id));
  });

  const [formData, onChange] = useFormData({
    charity: {
      countryId: null,
      charityId: null,
    },
    checkoutItems: {
      dvd: [],
      books: [],
    },
    delivery: {
      subscription: 'week',
      firstname: '',
      lastname: '',
      // fullname: '',
      postcode: '',
      address_1: '',
      address_2: '',
      town: '',
      county: '',
      is_used_same_address_for_billing: true,
    },
    // contact: {
    //   phone: null,
    //   email: null
    // },
    payment: {
      phone: '',
      email: '',
      isEmailedMe: false,

      card_number: '',
      expiry_at: '',
      cvv: '',
      name: '',

      billing_firstname: '',
      billing_lastname: '',
      // billing_fullname: '',
      billing_postcode: '',
      billing_address_1: '',
      billing_address_2: '',
      billing_town: '',
      billing_county: '',
    },
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    if (isShowing) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isShowing]);

  return (
    <>
      <Hero />
      <GetStartedForm onChange={onChange} toggle={toggle} />
      <HowItWorks />
      <Subscribe toggle={toggle} />
      <Mission />
      <Register />
      <Dialog isLarge isShowing={isShowing} hide={toggle}>
        {/* <h1 className="font-header text-center text-2xl sm:text-3xl font-bold text-new-red leading-tight mb-2 sm:mb-4">
          Select items
        </h1> */}

        <Checkout formData={formData} onChange={onChange} />
        {/* <h3 className="text-center text-base sm:text-l text-gray-600 font-medium mb-6 sm:mb-6">We’ll be launching Charity Shop Exchange in the next few days. Please follow us on Twitter for updates:</h3>
        <p className="font-header text-base text-center sm:text-l font-bold text-new-red">
          <a href="https://twitter.com/CharityShopEx"><img
            className="inline pr-1 transition duration-500 ease-in-out transform hover:-translate-y-1"
            src={twitter}
            alt="twitter"
            style={{ width: 30, height: 30 }}
          />@CharityShopEx</a>
        </p> */}
      </Dialog>
    </>
  );
}
