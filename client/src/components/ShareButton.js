import React from 'react';
import useWebShare from "react-use-web-share";
import shareIcon from "../assets/img/share.png";

export default function ShareButton() {
  const { isSupported, loading, share } = useWebShare();

  function handleClick() {
    if ( isSupported ) {
      share({
        title: "Charity Shop Exchange",
        text: "Fight isolation with books and DVDs! Charity Shop Exchange collects a selection of books and DVDs from local charity shops and delivers weekly, bi-weekly or monthly - it's up to you.",
        url: "https://charityshopexchange.com/"
      });
    } else {
      console.log("Not supported");
    }
  }

  return (
    !loading && isSupported && (

      <div
        onClick={handleClick}
        className="share-button fixed z-50 flex items-center top-0 right-0 mt-2 sm:mt-4 mr-4 sm:mr-8 rounded-md bg-gray-100 border border-gray-700 py-2 px-5"
      >

        <img
          className="h-3 w-auto mr-3"
          src={shareIcon}
          alt="share"
        />

        <div className="text-sm font-medium text-center text-gray-700">
          Share
        </div>

      </div>
    )
  );
}
