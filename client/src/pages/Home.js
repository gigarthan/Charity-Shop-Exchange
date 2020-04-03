import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Form from "../components/Form/Form";
import GetStartedForm from "../components/GetStartedForm";

import balloon from "../assets/img/balloon@2x.png";
import hero from "../assets/img/hero_01_girl.png";
// import boxes from "../assets/img/boxes.png";
import wish from "../assets/img/wish@2x.png";
import deliver from "../assets/img/deliver@1x.png";
import enjoy from "../assets/img/enjoy@2x.png";
import onefinger from "../assets/img/one-finger_200_transparent.gif";
import box from "../assets/img/4039-rocking-gift.gif";
import boxopen from "../assets/img/18033-box-open-gray-200.gif";
import boxfill from "../assets/img/3321-shipment.gif";
import boxwalk from "../assets/img/17431-package-delivery.gif";
import starttext from "../assets/img/start text.png";
import base from "../assets/img/base@1x.png";
import door from "../assets/img/door@1x.png";
import newhero from "../assets/img/newHeroImageonly.svg";

export default function Home() {
  return (
    <Layout>
      {/* Hero section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:flex-stretch items-center sm:items-start max-w-full sm:max-w-screen-md md:max-w-screen-lg pt-10 mb-8 sm:mb-0 sm:pt-32 mx-auto px-12 sm:px-10">
          {/* hero left */}
          <div className="flex flex-col items-start sm:w-1/2 md:w-2/3 sm:mr-2">
            <h1 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold text-new-red leading-tight">
              Fighting&nbsp;isolation<br></br> with books and DVDs
            </h1>
            <h3 className="text-xs mt-3 sm:text-sm md:text-md lg:text-lg text-gray-600 font-medium mb-12 sm:mb-12">
              Get a regular supply of things to read and watch.
              <span className="block">
              We collect a
              selection of books and DVDs from local charity shops and deliver
              weekly, bi-weekly or monthly — it’s up to you.

                </span>
            </h3>
          </div>
          <div className="flex-1 w-3/4 sm:w-auto ">
            <img className="" src={newhero} alt="newhero" />
          </div>
        </div>
      </div>

          {/* hero right */}

          {/* =====Old Hero image - the girl====== */}

          {/* <div className="w-full">
                <img className="sm:mr-32" src={boxopen} alt="hero" />
              </div>

        <div className="relative h-64 sm:h-auto w-full sm:pl-4">
          <img
            className="absolute z-10 right-0 bottom-0 w-56 sm:w-64 "
            src={hero}
            alt="hero"
          />
          <img
            className=" sm: absolute left-0.top-0 w-32 sm:w-32"
            src={balloon}
            alt="text-box"
          />
        </div> */}

          {/* ============== New Hero Door ===================== */}

      <div className="max-w-screen-md mx-auto pl-20 sm:pl-12 transition duration-500 ease-in-out transform hover:-translate-y-1">
        <img className="w-3/4 sm:w-auto" src={starttext} alt="text" />
      </div>

      {/* Input section */}
      <div className="pb-20 px-10">
        <div className="max-w-screen-md mx-auto">
          <GetStartedForm />
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="bg-new-gray pt-8 sm:pt-12 pb-20">
        <div className="max-w-screen-lg mx-auto px-3 sm:px-8 ">
          <div className="font-header mx-auto text-3xl sm:text-5xl font-bold text-new-red mb-20 text-center ">
            How it works
          </div>
          {/* <div className="text-center text-sm sm:text-xl font-normal text-gray-500 mb-20">
            Your weekly subscription buys books & DVDs from local charity shops
          </div> */}

          <div className="px-4">
            <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start py-4 px-3 mb-12">
              <div className="flex-1 text-xl sm:text-2xl mt-3 font-semibold text-gray-700 leading-snug">
                1. Start by telling us the things you like to read and watch.
              </div>
              <div className="w-3/4 sm:w-2/5 flex-initial transition duration-500 ease-in-out transform hover:-translate-y-1
">
                <img className src={wish} alt="listening" />
              </div>
            </div>

            <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start mb-12">
              <div className="flex-1 text-xl sm:text-2xl mt-3 font-semibold text-gray-700 leading-snug">
                2. We buy the items from your local charity shops and drop the
                box at your door.
              </div>
              <div className="w-48 sm:w-1/2 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <img className="ml-8 sm:mr-12" src={deliver} alt="deliver" />
              </div>
            </div>

            <div className="flex flex-col-reverse items-start sm:flex-row py-4 px-3 mb-12">
              <div className="flex-1">
                <div className="text-xl sm:text-2xl mt-3 font-semibold text-gray-700 leading-snug">
                  3. Enjoy moments of liberation without leaving home.
                </div>
              </div>
              <div className="w-3/4 sm:w-2/5 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <img className="sm:mr-32" src={enjoy} alt="enjoy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-20">
        <div className="text-center leading-tight font-header max-w-screen-lg mx-auto text-2xl sm:text-5xl font-bold text-new-lightnavy mb-8 px-12 sm:px-20">
          A Charity Shop Exchange subscription buys books and DVDs from local
          charity shops
          <div className="flex items-center">
            <div className="flex flex-col items-center w-full text-center cursor-pointer text-sm sm:text-xl font-medium text-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1 ">
              <span className="mt-12">
                <a
                  href="https://charity-shop-exchange.subbly.me"
                  className=""
                >
                  Subscribe here{" "}
                </a>
              </span>
            </div>

            {/* <svg className="h-5 mt-3 fill-current text-gray-700 hover:text-gray-900 " xmlns="http://www.w3.org/2000/svg">
            <path d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"fill-rule="nonzero"/>
            </svg> */}
          </div>
        </div>
      </div>

      {/* mission section */}
      <div className="pt-20 pb-32 bg-new-gray">
        <div className="text-center leading-tight font-header max-w-screen-lg mx-auto text-2xl sm:text-5xl font-bold text-new-lightnavy mb-8 px-12 sm:px-20">
          Responding to the coronavirus crisis
          <span className="block text-left text-xs sm:text-xl font-medium mt-12 text-gray-700 leading-normal">
            We're in this together. We don’t know exactly how long we’ll be
            instructed to stay indoors but we do know there’s no single moment
            where everything instantly gets back to normal. Over 1 million
            people in the UK need to be shielded from COVID-19 for at least the
            next 12 weeks. Hence, a wartime effort is needed to deliver services
            which help these shielded people get through this.
          </span>
          <div className="mt-12 text-center cursor-pointer text-xs sm:text-xl font-medium text-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <span className="block flex-shrink-0 mr-3 ">
              <Link
                to="/about"
                className=""
              >
                Learn more about our approach{" "}
              </Link>
            </span>
            {/* <svg
              className="h-5 mt-3 fill-current text-gray-700 hover:text-gray-900 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"
                fill-rule="nonzero"
              />
            </svg> */}
          </div>
        </div>
      </div>

      {/* CTA */}
      <Form />
    </Layout>
  );
}
