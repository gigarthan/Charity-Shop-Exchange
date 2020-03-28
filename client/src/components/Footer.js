import React from 'react';
import {Link} from 'react-router-dom';
import logoWhite from "../assets/img/logo_white@2x.png";

export default function Footer() {

  return (
    <div className="bg-new-navy pt-12">
      <div>
        <div className="flex max-w-screen-md mx-auto justify-center mb-20">

          <img className="h-10 md:h-12 mr-12 cursor-pointer" src={logoWhite} alt="logo" />

          <div className="flex flex-col ">
          <div className="text-xs text-gray-200 mb-2 cursor-pointer">
              Register Your Charity
            </div>
            <div className="text-xs text-gray-200 mb-2 cursor-pointer">
              About
            </div>
            
            <div className="text-xs text-gray-200 mb-2 cursor-pointer">
              <Link to="/faq">FAQs</Link>
            </div>
            </div>
          </div>

        </div>

            <div className="flex justify-around mb-2 w-4/5 mx-auto py-1 border-t-2 border-b-2 border-gray-600 ">
                <div className="text-xs text-gray-200 px-2 cursor-pointer">
                  <Link to="/privacy">Privacy</Link>
                </div>   
                <div className="text-xs text-gray-200 px-2 cursor-pointer">
                  <Link to="/terms">Terms</Link>
                </div>   
            </div>

        <div className="flex-initial text-gray-300 text-xs py-3 text-center ">
          © 2020 Charity Shop Exchange
        </div>
    </div>
  );
}