import React from 'react';
import wish from "../../assets/img/wish@2x.png";
import deliver from "../../assets/img/deliver@1x.png";
import enjoy from "../../assets/img/enjoy@2x.png";

export default function HowItWorks() {
  return (
    <div className="bg-new-gray pt-8 sm:pt-12 pb-12 sm:pb-20">
      <div className="max-w-screen-lg mx-auto px-3 sm:px-8 ">
        <div className="font-header mx-auto text-3xl sm:text-5xl font-bold text-new-red mb-12 sm:mb-20 text-center ">
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

          <div className="flex flex-col-reverse items-start sm:flex-row py-4 px-3 mb-6">
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
  );
}