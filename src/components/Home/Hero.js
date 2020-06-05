import React from 'react';

import newhero from '~/assets/img/newHeroImageonly.svg';

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-stretch items-center sm:items-start max-w-full sm:max-w-screen-md md:max-w-screen-lg pt-10 mb-8 sm:mb-0 sm:pt-32 mx-auto px-12 sm:px-10">
        {/* hero left */}
        <div className="flex flex-col items-start sm:w-1/2 md:w-2/3 sm:mr-2">
          <h1 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold text-new-red leading-tight">
            Fighting&nbsp;isolation<br /> with books and DVDs
          </h1>
          <h3 className="text-sm mt-3 sm:text-sm md:text-md lg:text-lg text-gray-600 font-medium mb-12 sm:mb-12">
            Get a regular supply of things to read and watch. We&nbsp;collect a
            selection of books and DVDs from local charity shops
            and&nbsp;deliver them to anywhere in the UK. Weekly, bi-weekly or
            monthly deliveries — it’s up to you.
          </h3>
        </div>
        <div className="flex-1 w-3/4 sm:w-auto ">
          <img className="" src={newhero} alt="newhero" />
        </div>
      </div>
    </div>
  );
}
