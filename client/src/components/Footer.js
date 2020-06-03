import React from 'react';
import {Link} from 'react-router-dom';
import logoWhite from "../assets/img/cse_logo_white@2x.png";

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
              <Link to="/register">Register your charity</Link>
            </li>
            <li className="text-xs text-gray-200 mb-3 cursor-pointer">
              <Link to="/faq">Frequently asked questions</Link>
            </li>
            <li className="text-xs text-gray-200 mb-3 cursor-pointer">
              <Link to="/together">Together</Link>
            </li>
            <li className="text-xs text-gray-200 mb-3 cursor-pointer">
              <a data-billsby-type="account">Manage account</a>
            </li>
          </ul>
          <ul className="flex flex-col items-center sm:block flex-1 sm:flex-none">
            <li className="text-xs text-gray-200 mb-3 sm:mb-4 cursor-pointer">
              <a href="mailto:together@charityshopexchange.com">
                together@charityshopexchange.com
              </a>
            </li>
            <li className="text-xs text-gray-200 mb-2 cursor-pointer">
            <a href="https://twitter.com/CharityShopEx">
                Twitter @CharityShopEx
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-none sm:flex-row max-w-screen-lg">
        <div className="text-gray-300 text-center text-xs">
        © 2020 Charity Shop Exchange
        </div>
        <div className="flex flex-col sm:flex-row text-xs text-center text-gray-200 px-8 cursor-pointer mt-4 sm:mt-0">
          <div className="mb-4 sm:mb-0">
          <Link className="mr-0 sm:mx-4" to="/privacy">Privacy</Link>
          &nbsp;|&nbsp;
          <Link className="mr-0 sm:mx-4 " to="/terms">Terms</Link>

          </div>

          <div className="block">
          <a className="mr-0 sm:mx-4" href="https://icons8.com">How it works svgs by icon8</a>
          </div>

        </div>
      </div>
    </div>
  );
}
