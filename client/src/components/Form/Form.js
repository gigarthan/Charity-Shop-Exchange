import React from 'react';
import '@vaadin/vaadin-combo-box';
import useDialog from "./useDialog";
import Dialog from "./Dialog";

export default function Form() {
  const {isShowing, toggle} = useDialog();

  return (
      <div className="pt-12 pb-32 bg-red-700">
        <div className="lg:items-start mx-auto sm:max-w-screen-lg mx-auto px-12 sm:px-12">
          <div className="flex-1 lg:text-left text-2xl sm:text-4xl font-semibold tracking-wide text-white mb-2 sm:mb-4">
            We need more Charity Shops to join the cause
          </div>
          <div className="flex items-center">
            <span className=" flex-shrink-0 mr-3 ">
            <a href="url" className="italic cursor-pointer text-base sm:text-lg font-medium text-gray-100 hover:text-gray-300 ">Enlist now</a>
            </span>
            <svg className="h-5 mt-1 fill-current text-gray-100 hover:text-gray-300 " xmlns="http://www.w3.org/2000/svg">
            <path d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"fill-rule="nonzero"/>
            </svg>
            </div>

          {/* <button
              className="text-sm sm:text-lg mt-4 sm:mt-0 font-semibold py-1 md:py-3 px-4 md:px-20 rounded-full text-white border-2 border-white"
              onClick={toggle}
          >
            Get in touch
          </button> */}
          <Dialog
              isShowing={isShowing}
              hide={toggle}
          />
        </div>
      </div>
  )
}
