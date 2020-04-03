import React from 'react';

export default function Subscribe({toggle}) {
  return (
    <div className="pt-12 pb-20">
      <div className="text-center leading-tight font-header max-w-screen-lg mx-auto text-2xl sm:text-5xl font-bold text-new-lightnavy mb-8 px-12 sm:px-20">
        A Charity Shop Exchange subscription buys books and DVDs from local
        charity shops
        <div className="flex items-center">
          <div className="flex flex-col items-center w-full text-center cursor-pointer text-sm sm:text-xl font-medium text-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1 ">
            <span className="mt-12">
            { /*
              <a
                href="https://charity-shop-exchange.subbly.me"
                className=""
              >
                Subscribe here{" "}
              </a>
              */ }

              <a
                href="https://charityshopexchange.com/"
                onClick={(e) => {e.preventDefault(); toggle();}}
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
  );
}