import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import GetStartedForm from '../components/Home/GetStartedForm';
import HowItWorks from '../components/Home/HowItWorks';
import Subscribe from '../components/Home/Subscribe';
import Mission from '../components/Home/Mission';
import Register from '../components/Home/Register';
import Dialog from '../components/Dialog';
import useDialog from '../components/Dialog/useDialog';

import balloon from '../assets/img/balloon@2x.png';
import hero from '../assets/img/hero_01_girl.png';
// import boxes from "../assets/img/boxes.png";
import onefinger from '../assets/img/one-finger_200_transparent.gif';
import box from '../assets/img/4039-rocking-gift.gif';
import boxopen from '../assets/img/18033-box-open-gray-200.gif';
import boxfill from '../assets/img/3321-shipment.gif';
import boxwalk from '../assets/img/17431-package-delivery.gif';
import base from '../assets/img/base@1x.png';
import door from '../assets/img/door@1x.png';
import twitter from '../assets/img/twitter.svg';
import Checkout from '../components/Home/Checkout/index';
import items from '../import/planList';

import useFormData from "../hooks/useFormData";

export default function Home() {
  const { isShowing, toggle } = useDialog();

  let planList = [];
  for (const key in items) {
    const list = items[key];
    planList = planList.concat(list.map((elem) => elem.id));
  }

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
      subscription: 'month',
      // firstname: null,
      // lastname: null,
      fullname: null,
      postcode: null,
      address_1: null,
      address_2: null,
      town: null,
      is_used_same_address_for_billing: true
    },
    // contact: {
    //   phone: null,
    //   email: null
    // },
    payment: {
      phone: null,
      email: null,

      card_number: null,
      expiry_at: null,
      cvv: null,
      name: null,

      // billing_firstname: null,
      // billing_lastname: null,
      billing_fullname: null,
      billing_postcode: null,
      billing_address_1: null,
      billing_address_2: null,
      billing_town: null,
    }
  });

  useEffect(() => {
    console.log(formData)
  }, [formData]);

  useEffect(() => {
    if(isShowing){
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isShowing]); 

  return (
    <>
      <Layout>
        <Hero />
        <GetStartedForm onChange={onChange} toggle={toggle} />
        <HowItWorks />
        <Subscribe toggle={toggle} />
        <Mission />
        <Register />
      </Layout>
      <Dialog isLarge isShowing={isShowing} hide={toggle}>
        {/* <h1 className="font-header text-center text-2xl sm:text-3xl font-bold text-new-red leading-tight mb-2 sm:mb-4">
          Select items
        </h1> */}

        <Checkout formData={formData} onChange={onChange}/>
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
