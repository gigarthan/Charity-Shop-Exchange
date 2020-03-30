import React from 'react';
import Layout from '../components/Layout';
import Form from "../components/Form/Form";
import GetStartedForm from "../components/GetStartedForm";

import balloon from "../assets/img/balloon@2x.png";
import hero from "../assets/img/hero_01_girl.png";
import boxes from "../assets/img/boxes.png";
import wish from "../assets/img/wish@2x.png";
import deliver from "../assets/img/deliver@1x.png";
import enjoy from "../assets/img/enjoy@2x.png";

export default function Home() {

  return (
      <Layout>

        {/* Hero section */}
        <div className="flex flex-col sm:flex-row h-full max-w-full sm:max-w-screen-md mt-12 mx-auto px-8 sm:px-0">
          {/* hero left */}
                <div className="flex flex-col items-start w-full sm:pr-4 sm:mb-12 sm:mb-0">
                  <h1 className="font-header text-3xl sm:text-5xl font-bold text-red-700 leading-tight mb-2 sm:mb-4">
                    Fighting&nbsp;isolation with Books and DVDs
                  </h1>
                  <h3 className="text-xs sm:text-xl text-gray-500 font-md mb-24 sm:mb-12">
                    Get a regular supply of things to read and watch. We collect a selection of books and DVDs from local charity shops and deliver weekly, bi-weekly or monthly - it's up to you.
                  </h3>
                </div>
          {/* hero right */}
          <div className="relative h-64 sm:h-auto w-full sm:pl-4">
           
            <img
              className="absolute z-10 left-0 bottom-0 w-20 sm:w-32 "
              src={boxes}
              alt="boxes"
            />
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
        <div className="pb-12 pt-12 bg-gray-200">
          <div className="max-w-screen-md mx-auto">
            <GetStartedForm />
          </div>
        
        </div>

        {/* HOW IT WORKS SECTION */}
        <div className="max-w-screen-md mx-auto px-3 sm:px-8 pt-12">
          <div className="font-header mx-auto text-3xl sm:text-5xl font-bold text-red-700 text-center ">
            How it works
          </div>
          {/* <div className="text-center text-sm sm:text-xl font-normal text-gray-500 mb-20">
            Your weekly subscription buys books & DVDs from local charity shops
          </div> */}

          <div className="px-4 sm:px-8">
            <div className="flex flex-col-reverse sm:flex-row mb-12">
              <div className="w-full sm:w-1/2">
                <img className="sm:mr-32" src={wish} alt="daydream" />
              </div>
              <div className="flex-1 sm:ml-8">
                <div className="text-md sm:text-xl font-semibold text-gray-500">
                  Step 1
                </div>
                <div className="text-xl sm:text-3xl mt-3 font-bold text-gray-700 leading-snug">
                  Start by telling us the things you like to read and watch
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mb-12">
              <div className="flex-1 sm:mr-8">
                <div className="text-md sm:text-xl font-semibold text-gray-500">
                  Step 2
                </div>
                <div className="text-xl sm:text-3xl mt-3 font-bold text-gray-700 leading-snug">
                  We buy the items from your local charity shops and drop the
                  box at your door.
                </div>
              </div>
              <div className="sm:w-1/2">
                <img className="ml-8 sm:ml-20" src={deliver} alt="gifts" />
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row py-4 px-3 mb-12">
              <div className=" sm:w-1/2">
                <img className="sm:mr-32" src={enjoy} alt="listening" />
              </div>
              <div className="flex-1">
                <div className="text-md sm:text-xl font-semibold text-gray-500">
                  Step 3
                </div>
                <div className="text-xl sm:text-3xl font-bold text-gray-700 leading-snug mb-8 sm:mb-0">
                  Enjoy moments of liberation without leaving home.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mission section */}
        <div className="pt-12 pb-32 bg-new-gray">
          <div className="font-header max-w-screen-lg mx-auto text-3xl sm:text-4xl font-bold text-gray-700 mb-2 px-12">
            We’re in this together
            <span className="block text-base sm:text-lg font-normal mt-4 text-gray-700 leading-normal">
              We don’t know exactly how long we’ll be instructed to stay indoors
              but we do know there’s no cliff-edge where everything instantly
              gets back to normal. 
              <span className="block">
              Over 1 million people in the UK need to be
              shielded from Coronavirus, for at least the next 12 weeks. Hence,
              a wartime effort is needed to deliver services which help these
              shielded people get through this.
              </span>
            </span>
            <div className="flex items-center">
            <span className="block mr-3 ">
            <a href="url" className="italic cursor-pointer text-base sm:text-lg font-semibold text-gray-700 hover:text-gray-900 ">Learn more about our approach </a>
            </span>
            <svg className="h-5 mt-3 fill-current text-gray-700 hover:text-gray-900 " xmlns="http://www.w3.org/2000/svg">
            <path d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"fill-rule="nonzero"/>
            </svg>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Form />

    </Layout>
  );
}