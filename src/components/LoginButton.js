import React from 'react';

export default function LoginButton() {
  return (
    <button type="button" data-billsby-type="account">
      <div
        className="z-50 login-button r flex items-center top-0 right-0 mt-2 
        sm:mt-4 rounded-md bg-white absolute py-1 px-5">
        <div className=" text-sm font-medium red text-center text-gray-700">
          Log In
        </div>
      </div>
    </button>
  );
}
