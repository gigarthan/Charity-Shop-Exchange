import React from 'react';
import {Link} from 'react-router-dom';
import logoWhite from "../assets/img/logo_white@2x.png";

export default function Footer() {

  return (
    <div className="bg-new-navy pt-12 sm:pt-20 pb-8 px-12 sm:px-20">
      <div>
        <div className="flex flex-col items-center sm:flex-row sm:items-start max-w-screen-lg justify-between sm:mx-auto mb-12 sm:mb-20">
          <div>
            <Link to="/">
              <img className="h-10 md:h-12 cursor-pointer mb-12" src={logoWhite} alt="logo" />
            </Link>
          </div>
          <ul className="flex flex-col items-center sm:inline-block flex-1 sm:flex-none mb-8 sm:mb-12">
            <li className="text-xs text-gray-200 mb-3 sm:mb-4 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="text-xs text-gray-200 mb-3 sm:mb-4 cursor-pointer" >
              <Link to="/register">Register Your Charity</Link>
            </li>
            <li className="text-xs text-gray-200 mb-2 cursor-pointer">
              <Link to="/faq">Frequently Asked Questions</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center sm:block flex-1 sm:flex-none">
            <li className="text-xs text-gray-200 mb-3 sm:mb-4 cursor-pointer">
              <a href="mailto:together@charityshopexchange.com">
                together@charityshopexchange.com
              </a>
            </li>
            <li className="text-xs text-gray-200 mb-2 cursor-pointer">
              <a href="https://twitter.com/">Twitter @</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-none sm:flex-row max-w-screen-lg mx-auto justify-between text-gray-300 text-xs ">
        © 2020 Charity Shop Exchange
        <span className="text-xs text-gray-200 px-2 cursor-pointer mt-4">
          <Link to="/privacy">Privacy</Link>
          &nbsp;|&nbsp;
          <Link to="/terms">Terms</Link>
        </span>
      </div>
    </div>
  );
}