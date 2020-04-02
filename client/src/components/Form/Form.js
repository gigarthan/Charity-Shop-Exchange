import React from "react";
import {Link} from "react-router-dom";
import "@vaadin/vaadin-combo-box";
import useDialog from "./useDialog";
import Dialog from "./Dialog";

export default function Form() {
  const { isShowing, toggle } = useDialog();

  return (
    <div className="pt-12 pb-32 bg-new-lightnavy">
      <div>
            <div className=" mx-auto sm:max-w-screen-lg px-12 sm:px-20">
                <div className="text-center leading-tight font-header text-lg lg:text-3xl font-semibold text-gray-200 mb-2 sm:mb-4">
                  We need more charity shops to join the cause
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 hover:text-red-700 text-xs sm:text-xl font-medium text-white cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1">

                <div className="">
                  <Link to="/register"
                  >
                    Enlist now
                  </Link>
                </div>
                {/* <svg
                  className="h-5 w-8 fill-current ml-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.528 10.025l-16.5-.089L1 11.272h16.241L12.7 15.96 13.705 17 20 10.53l-1.006-1.04L13.704 4 12.7 5.039z"
                    fill-rule="nonzero"
                  />
                </svg> */}

            </div>
            <Dialog isShowing={isShowing} hide={toggle} />
      </div>
    </div>
  );
}
