import React from 'react';
import useWebShare from 'react-use-web-share';

import shareIcon from '../assets/img/share.png';
import config from '../config.json';

export default function ShareButton() {
  const { isSupported, loading, share } = useWebShare();

  function handleClick() {
    if (isSupported) {
      share({
        title: config.shareTitle,
        text: config.shareDescription,
        url: config.shareUrl,
      });
    } else {
      window.open(
        config.facebookSharerUrl + config.shareUrl,
        'FB',
        config.facebookSharerWindowFeatures,
      );
    }
  }

  return (
    !loading && (
      <div
        onClick={handleClick}
        onKeyUp={handleClick}
        role="button"
        tabIndex="0"
        className="share-button fixed z-50 flex items-center top-0 right-0 mt-2 sm:mt-4 mr-4 sm:mr-8 rounded-md bg-white py-1 px-5">
        <img className="h-3 w-auto mr-3 blue" src={shareIcon} alt="Share" />

        <div className="text-sm font-medium text-center blue text-gray-700">
          Share
        </div>
      </div>
    )
  );
}
