import { Link } from 'gatsby';
import React from 'react';

import logo from '../assets/img/cse_logo@2x.png';
import LoginButton from './LoginButton';
import ShareButton from './ShareButton';

export default function Header({ isHide }) {
  return (
    <div
      className={`w-screen py-3 px-8 ${
        isHide ? 'bg-new-lightgray' : 'bg-white'
      } z-10 relative`}>
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="h-8 md:h-12" src={logo} alt="logo" />
        </Link>
        <ShareButton />
      </div>
    </div>
  );
}
