import React from "react";
import "@vaadin/vaadin-combo-box";
import useDialog from "./useDialog";
import Dialog from "./Dialog";

export default function Form() {
  const { isShowing, toggle } = useDialog();

  return (
    <div className="pt-12 pb-32 bg-new-lightnavy">
      <div className=" mx-auto sm:max-w-screen-lg px-12 sm:px-20">
          <div className="text-center leading-tight font-header text-3xl sm:text-5xl font-semibold text-white mb-2 sm:mb-4">
            We need more Charity Shops to join the cause
          </div>
      </div>
      
      <div className=" text-center hover:bg-new-navy w-32 py-1 px-3 mx-auto mt-8 text-xs sm:text-xl font-medium text-white cursor-pointer">
        <a href="url"
        >
          Enlist now
        </a>
      </div>
      {/* <svg
        className="h-5 mt-1 fill-current text-gray-100 hover:text-gray-300 "
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"
          fill-rule="nonzero"
        />
      </svg> */}

      {/* <button
          className="text-sm sm:text-lg mt-4 sm:mt-0 font-semibold py-1 md:py-3 px-4 md:px-20 rounded-full text-white border-2 border-white"
          onClick={toggle}
      >
        Get in touch
      </button> */}
      <Dialog isShowing={isShowing} hide={toggle} />
      
    </div>
  );
}
