import React, { useEffect } from 'react';

// import twitter from '~/assets/img/twitter.svg';
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
    // eslint-disable-next-line no-console
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
        {/*
        <h1 className="mb-2 text-2xl font-bold leading-tight text-center font-header sm:text-3xl text-new-red sm:mb-4">
          Launching soon!
        </h1>
        <h3 className="mb-6 text-base font-medium text-center text-gray-600 sm:text-l sm:mb-6">
          We’ll be launching Charity Shop Exchange in the next few days. Please
          follow us on Twitter for updates:
        </h3>
        <p className="text-base font-bold text-center font-header sm:text-l text-new-red">
          <a href="https://twitter.com/CharityShopEx">
            <img
              className="inline pr-1 transition duration-500 ease-in-out transform hover:-translate-y-1"
              src={twitter}
              alt="twitter"
              style={{ width: 30, height: 30 }}
            />
            @CharityShopEx
          </a>
        </p> */}
        <Checkout formData={formData} onChange={onChange} />
      </Dialog>
    </>
  );
}
