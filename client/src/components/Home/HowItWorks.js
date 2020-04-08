import React from "react";
import wish from "../../assets/img/wish.png";
import deliver from "../../assets/img/deliver.png";
import enjoy from "../../assets/img/enjoy.png";

export default function HowItWorks() {
  return (
    <div className="bg-new-gray pt-8 sm:pt-12 pb-12 sm:pb-20">
      <div className="sm:max-w-screen-lg mx-auto px-3 sm:px-8 ">
        <div className="font-header mx-auto text-3xl sm:text-5xl font-bold text-new-red mb-12 sm:mb-20 text-center">
          How it works
        </div>
        {/* <div className="text-center text-sm sm:text-xl font-normal text-gray-500 mb-20">
          Your weekly subscription buys books & DVDs from local charity shops
        </div> */}

        <div className="flex flex-col items-center sm:items-stretch">
          <div className="flex w-3/4 sm:w-1/2 flex-col items-center mb-12 sm:flex-row mb-12 sm:self-end">
            <div className="hidden sm:flex flex-none w-px h-32 bg-gray-700 mr-4"></div>
            <div className="flex-initial text-lg mt-3 mr-2 mb-12 sm:mb-0 font-semibold text-gray-700 leading-snug">
              <span className="block text-3xl font-normal">1.</span>
              Start by telling us the things you like to read and watch.
            </div>
            <div className="flex-none transition duration-500 ease-in-out transform hover:-translate-y-1">
              <img src={wish} alt="listening" />
            </div>
          </div>

          <div className="flex  w-3/4 sm:w-1/2 flex-col items-center sm:flex-row sm:items-center mb-12 sm:self-start ">
            <div className="hidden sm:flex flex-none w-px h-32 bg-gray-700 mr-4"></div>
            <div className="flex-1 text-lg mt-3 mb-12 sm:mb-0 font-semibold text-gray-700 leading-snug">
              <span className="block text-3xl font-normal">2.</span>
              We buy the items from your local charity shops and drop the box at
              your door.
            </div>
            <div className="flex-none transition duration-500 ease-in-out transform hover:-translate-y-1">
              <img className="ml-8 sm:mr-12" src={deliver} alt="deliver" />
            </div>
          </div>

          <div className="flex  w-3/4 sm:w-1/2 flex-col items-center sm:flex-row py-4 px-3 mb-6 sm:self-center">
              <div className="hidden sm:flex flex-none w-px h-32 bg-gray-700 mr-4"></div>
              <div className="text-lg mt-3 mb-12 sm:mb-0 font-semibold text-gray-700 leading-snug">
                <span className="block text-3xl font-normal">3.</span>
                Enjoy moments of liberation without leaving home.
              </div>
            
            <div className="flex-none transition duration-500 ease-in-out transform hover:-translate-y-1">
              <img src={enjoy} alt="enjoy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
