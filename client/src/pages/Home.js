import React from 'react';

import twitter from '../assets/img/twitter.svg';
import Dialog from '../components/Dialog';
import useDialog from '../components/Dialog/useDialog';
import GetStartedForm from '../components/Home/GetStartedForm';
import Hero from '../components/Home/Hero';
import HowItWorks from '../components/Home/HowItWorks';
import Mission from '../components/Home/Mission';
import Register from '../components/Home/Register';
import Subscribe from '../components/Home/Subscribe';
import Layout from '../components/Layout';

export default function Home() {
  const { isShowing, toggle } = useDialog();

  return (
    <>
      <Layout>
        <Hero />
        <GetStartedForm toggle={toggle} />
        <HowItWorks />
        <Subscribe toggle={toggle} />
        <Mission />
        <Register />
      </Layout>
      <Dialog isShowing={isShowing} hide={toggle}>
        <h1 className="font-header text-center text-2xl sm:text-3xl font-bold text-new-red leading-tight mb-2 sm:mb-4">
          Launching soon!
        </h1>
        <h3 className="text-center text-base sm:text-l text-gray-600 font-medium mb-6 sm:mb-6">
          We’ll be launching Charity Shop Exchange in the next few days. Please
          follow us on Twitter for updates:
        </h3>
        <p className="font-header text-base text-center sm:text-l font-bold text-new-red">
          <a href="https://twitter.com/CharityShopEx">
            <img
              className="inline pr-1 transition duration-500 ease-in-out transform hover:-translate-y-1"
              src={twitter}
              alt="twitter"
              style={{ width: 30, height: 30 }}
            />
            @CharityShopEx
          </a>
        </p>
      </Dialog>
    </>
  );
}
