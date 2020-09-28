import { Link } from 'gatsby';
import React from 'react';

export default function TemplateHeader() {
  return (
    <div className="flex flex-col items-center flex-wrap sm:flex-row sm:items-start max-w-screen-lg justify-between sm:mx-auto">
      <div className="text-gray-600 text-center text-xs w-full lg:w-auto">
        © 2020 Charity Shop Exchange
      </div>

      <div className="flex flex-col sm:flex-row text-xs w-full lg:w-auto flex-wrap justify-center text-center mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row">
          <Link
            className="mr-0 sm:mr-4 text-gray-600 hover:text-white "
            to="/privacy">
            Privacy
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link
            className="mr-0 sm:mx-4 text-gray-600 hover:text-white"
            to="/terms">
            Terms
          </Link>
          <span className="hidden sm:inline">|</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <Link
            className="mr-0 sm:mx-4 text-gray-600 hover:text-white"
            to="/customer-terms">
            Customer Terms and Conditions
          </Link>
          <span className="hidden sm:inline">|</span>
        </div>
        <div className="block">
          <a
            className="mr-0 sm:mx-4 text-gray-600 hover:text-white"
            href="https://icons8.com">
            How it works svgs by icon8
          </a>
        </div>
      </div>
    </div>
  );
}
