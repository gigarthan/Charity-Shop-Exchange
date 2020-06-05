import React, { useState, useEffect } from 'react';

import starttext from '~/assets/img/start text.png';
import Button from '~/components/Button';
import Combo from '~/components/Combo';
import config from '~/config';
import { charities } from '~/import/charities.json';
import locations from '~/import/locations.json';
import { products } from '~/import/subbly-products.json';
import getCountyIdFromURL from '~/utils/GetCountyId';

export default function GetStartedForm({ toggle }) {
  const [countyId, setCountyId] = useState(0);
  const [charityId, setCharityId] = useState(0);

  /*

  // Append "Coming soon!" to the counties which aren't currently
  // serviced by any charity and mark them as "disabled" so they
  // are greyed out and can't be selected.
  //
  // (TODO: Add back in later; just show available counties at launch)

  const counties = locations.counties.map( county => {
    let numCharitiesForCounty = charities.reduce( function(count, charity) {
      return count + ( charity.countyIds.includes(county.id) ? 1 : 0 );
    }, 0)

    if (numCharitiesForCounty > 0) {
      return county;
    } else {
      return {
        ...county,
        name: county.name + " (coming soon!)",
        disabled: true
      };
    }
  });
  */

  // Simply don't show counties that aren't serviced
  // (TODO: This is for launch. Remove later when re-adding "Coming soon!" above)

  const counties = locations.counties.filter((county) => {
    const numCharitiesForCounty = charities.reduce(function (count, charity) {
      return count + (charity.countyIds.includes(county.id) ? 1 : 0);
    }, 0);

    if (numCharitiesForCounty > 0) {
      return true;
    }
    return false;
  });

  // On componentDidMount (when component is first loaded).
  useEffect(() => {
    autoSelectCounty();
  }, []);

  // Clear out the 'Charity' combo if 'County' is changed
  useEffect(() => {
    setCharityId(0);
    onChange({ keyToUpdate: 'charity.charityId', value: 0 });
  }, [countyId]);

  // If user arrives on subdomain and it is a valid county auto populate region
  function autoSelectCounty() {
    const countyIdFromURL = getCountyIdFromURL(counties);
    if (countyIdFromURL) {
      setCountyId(countyIdFromURL);
    }
  }

  // Redirect the user to Subbly
  function handleSubmit() {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('testMode') === true) {
      // We are in test mode; act as if we are launched

      // Find the Subbly product that represents this county
      const subblyProduct = products.find((product) =>
        product.countyIds.includes(countyId),
      );

      if (subblyProduct) {
        // Redirect to the Subbly product
        window.location.href = `${config.subblyCheckoutUrl}/${subblyProduct.id}`;
      } else {
        // Product not found in the products JSON, so display the Launching Soon modal instead
        toggle();
      }
    } else {
      // Before launch, display a Launching Soon modal instead
      toggle();
    }
  }

  return (
    <>
      <div className="max-w-screen-md mx-auto pl-20 sm:pl-12 transition duration-500 ease-in-out transform hover:-translate-y-1">
        <img className="w-3/4 sm:w-auto" src={starttext} alt="text" />
      </div>
      <div className="pb-20 px-10">
        <div className="max-w-screen-md mx-auto">
          <div className="flex flex-col sm:flex-row w-full items-center ">
            <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
              <div className="relative">
                <Combo
                  name="countyId"
                  value={countyId}
                  setValue={(value) => {
                    setCountyId(value);
                    onChange({ keyToUpdate: 'charity.countryId', value });
                  }}
                  items={counties}
                  placeholder="select"
                  // style={{ background: '#c7c7c7'}}
                  theme=""
                  label="Select a region"
                  className="block appearance-none w-full border border-none text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                />
              </div>
            </div>
            <div className="md:w-1/2 pr-2 mb-6 md:mb-0">
              <div className="relative">
                <Combo
                  name="charityId"
                  value={charityId}
                  setValue={(value) => {
                    setCharityId(value);
                    onChange({ keyToUpdate: 'charity.charityId', value });
                  }}
                  items={charities.filter((c) =>
                    c.countyIds.includes(countyId),
                  )}
                  disabled={
                    !countyId ||
                    counties.find((c) => c.id === countyId).disabled
                  }
                  placeholder="select"
                  theme=""
                  label="Pick a charity"
                  className="block appearance-none w-full border border-none text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                />
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={handleSubmit}
                disabled={charityId === 0}
                className="px-8">
                Continue
              </Button>
            </div>
          </div>
          <div className="text-center text-sm sm:text-sm font-normal text-gray-400 mt-4">
            Our charities send boxes to doorsteps across the UK. More charities
            coming soon.
          </div>
        </div>
      </div>
    </>
  );
}
