import React from 'react';
import {Link} from 'react-router-dom';
import logoWhite from "../assets/img/logo_white@2x.png";

export default function Footer() {

  return (
    <div className="bg-new-navy pt-12">
      <div>
        <div className="max-w-screen-md mx-auto flex justify-between px-8 mb-12">
          <img className="h-4 md:h-12 mr-12" src={logoWhite} alt="logo" />
          <div className="flex flex-col pr-4">
            <div className="text-xs text-gray-400 mb-2">
              About
            </div>
            <div className="text-xs text-gray-400 mb-2">
              Register Your Charity
            </div>
            <div className="text-xs text-gray-400 mb-2">
              <Link to="/faq">FAQs</Link>
            </div>
            <div className="text-xs text-gray-400 mb-2">
              <Link to="/privacy">Privacy</Link>
            </div>   
            <div className="text-xs text-gray-400">
              <Link to="/terms">Terms</Link>
            </div>   
          </div>
        </div>
        <div className="flex-initial text-gray-300 text-xs py-3 w-full text-center ">
          © 2020 Charity Shop Exchange
        </div>
      </div>
    </div>
  );
}