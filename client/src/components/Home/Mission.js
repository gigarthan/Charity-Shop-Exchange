import React from 'react';
import { Link } from "react-router-dom";


export default function Mission() {
  return (
    <div className="pt-8 sm:pt-12 pb-12 sm:pb-20 bg-new-gray">
      <div className="text-center leading-tight font-header max-w-screen-lg mx-auto text-2xl sm:text-5xl font-bold text-new-lightnavy px-12 sm:px-20">
        Responding to the coronavirus crisis
        <span className="block text-left text-sm sm:text-xl font-medium mt-12 text-gray-700 leading-normal">
        We're in this together. Whilst we’re past the peak, the heightened public health situation remains and there will be no 
        single moment when everything gets back to normal. Charity Shop Exchange is our response. A service built for
        the “new normal”, an effort to deliver a service to people who need the benefit of new things to read and watch, and an 
        initiative to help charity shops back on their feet.
        </span>
        <div className="mt-8 sm:mt-12 text-center cursor-pointer text-sm sm:text-xl font-medium text-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
          <span className="block flex-shrink-0 mr-3 ">
            <Link
              to="/about"
              className=""
            >
              Learn more about our approach <span className="font-sans">&rarr;</span>{" "}
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
  );
}