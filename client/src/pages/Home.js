import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form/Form";
import Hero from "../components/Home/Hero";
import GetStartedForm from "../components/Home/GetStartedForm";
import HowItWorks from "../components/Home/HowItWorks";
import Subscribe from "../components/Home/Subscribe";
import Mission from "../components/Home/Mission";
import Dialog from '../components/Dialog';
import useDialog from '../components/Dialog/useDialog';

import balloon from "../assets/img/balloon@2x.png";
import hero from "../assets/img/hero_01_girl.png";
// import boxes from "../assets/img/boxes.png";
import onefinger from "../assets/img/one-finger_200_transparent.gif";
import box from "../assets/img/4039-rocking-gift.gif";
import boxopen from "../assets/img/18033-box-open-gray-200.gif";
import boxfill from "../assets/img/3321-shipment.gif";
import boxwalk from "../assets/img/17431-package-delivery.gif";
import base from "../assets/img/base@1x.png";
import door from "../assets/img/door@1x.png";
import twitter from "../assets/img/twitter.svg";

export default function Home() {
  const {isShowing, toggle} = useDialog();

  return (
    <>
      <Layout>
        <Hero />
        <GetStartedForm toggle={toggle} />
        <HowItWorks />
        <Subscribe toggle={toggle} />
        <Mission />
        <Form />
      </Layout>
      <Dialog isShowing={isShowing} hide={toggle}>
        <div className="m-8">
          <h1 className="font-header text-3xl sm:text-5xl font-bold text-new-red leading-tight mb-2 sm:mb-4">
            Launching soon!
          </h1>
          <h3 class="text-base sm:text-xl text-gray-600 font-medium mb-6 sm:mb-6">We’ll be launching Charity Shop Exchange in the next few days. Please follow us on Twitter for updates:</h3>
          <p className="font-header text-xl sm:text-2xl font-bold text-new-red">
            <a href="https://twitter.com/CharityShopEx"><img
              className="inline pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
              src={twitter}
              alt="twitter"
              style={{ width: 40, height: 40 }}
            /> @CharityShopEx</a>
          </p>
        </div>
      </Dialog>
    </>
  );
}