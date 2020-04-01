import React from "react";
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

export default function Home() {
  return (
    <Layout>
      {/* Hero section */}
      <div className="flex flex-col sm:flex-row max-w-full sm:max-w-screen-md pt-32 mx-auto px-12 sm:px-0">
        {/* hero left */}
        <div className="flex flex-col items-start w-full sm:pr-4 sm:mb-12 sm:mb-0">
          <h1 className="font-header text-3xl sm:text-5xl font-bold text-new-red leading-tight mb-2 sm:mb-4">
            Fighting&nbsp;isolation with Books and DVDs
          </h1>
          <h3 className="text-base sm:text-lg text-gray-600 font-medium mb-12 sm:mb-12">
            Get a regular supply of things to read and watch. We collect a
            selection of books and DVDs from local charity shops and deliver
            weekly, bi-weekly or monthly - its up to you.
          </h3>
        </div>
        {/* hero right */}

        {/* <div className="w-full">
                <img className="sm:mr-32" src={boxopen} alt="hero" />
              </div> */}

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
        </div>
      </div>

      {/* Input section */}
      <div className="pb-20 pt-12">
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
                <div className="flex-shrink-0 text-xl sm:text-2xl mt-3 font-semibold text-gray-700 leading-snug">
                  1. Start by telling us the things you like to read and watch
                </div>
                <div className="w-3/4 sm:w-1/2 flex-initial">
                  <img className src={wish} alt="listening" />
                </div>
              
            </div>


            <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start mb-12">
                <div className="flex-1 text-xl sm:text-2xl mt-3 font-semibold text-gray-700 leading-snug">
                  2. We buy the items from your local charity shops and drop the
                  box at your door.
                </div>
                <div className="w-48 sm:w-1/2">
                  <img className="ml-8 sm:mr-12" src={deliver} alt="deliver" />
                </div>
            </div>


            <div className="flex flex-col-reverse items-center sm:flex-row py-4 px-3 mb-12">
              <div className="flex-1">
                <div className="text-xl sm:text-2xl mt-3 font-semibold text-gray-700 leading-snug">
                  3. Enjoy moments of liberation without leaving home.
                </div>
              </div>
              <div className="w-3/4 sm:w-1/2">
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
            <div className="flex flex-col items-center w-full">
              <span className="mt-12">
                <a
                  href="url"
                  className="text-center cursor-pointer text-sm sm:text-xl font-medium text-gray-600 hover:text-gray-900 "
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
          Responding to the Coronavirus Crisis
          <span className="block text-left text-xs sm:text-xl font-medium mt-12 text-gray-700 leading-normal">
            We're in this together. We don’t know exactly how long we’ll be instructed to stay indoors
            but we do know there’s no single moment where everything instantly gets
            back to normal.
              Over 1 million people in the UK need to be shielded from
              COVID-19 for at least the next 12 weeks. Hence, a wartime
              effort is needed to deliver services which help these shielded
              people get through this.
          </span>
          <div className="flex items-center">
            <span className="block flex-shrink-0 mr-3 ">
              <a
                href="url"
                className="cursor-pointer text-xs sm:text-xl font-medium text-gray-700 hover:text-gray-900 "
              >
                Learn more about our approach{" "}
              </a>
            </span>
            <svg
              className="h-5 mt-3 fill-current text-gray-700 hover:text-gray-900 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Form />
    </Layout>
  );
}
