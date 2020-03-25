import React from 'react';
import '@vaadin/vaadin-combo-box';
import useDialog from "./useDialog";
import Dialog from "./Dialog";

export default function Form() {
  const {isShowing, toggle} = useDialog();

  return (
      <div className="py-12 bg-red-700 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start sm:max-w-screen-lg mx-auto px-4 sm:px-12 ">
          <div className="flex-1 text-xl text-center lg:text-left sm:text-2xl font-semibold tracking-wide text-white mb-2 sm:pr-8 mb-12">
            Are you a Charity Shop who’d like to keep stock ticking over despite being closed to the public?
          </div>
          <button
              className="text-sm sm:text-lg mt-4 sm:mt-0 font-semibold py-1 md:py-3 px-4 md:px-20 rounded-full text-white border-2 border-white"
              onClick={toggle}
          >
            Get in touch
          </button>
          <Dialog
              isShowing={isShowing}
              hide={toggle}
          />
        </div>
      </div>
  )
}
