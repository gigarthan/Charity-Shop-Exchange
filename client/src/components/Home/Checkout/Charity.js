import React, { useState, useEffect } from 'react';
import Collapsable from '../Collapsable';
import Combo from '../../Combo';
import Button from '../../Button';

import { charities } from '../../../import/charities.json';
import locations from '../../../import/locations.json';

export default function Charity() {
  const [isOpen, setisOpen] = useState(true);
  const [countyId, setCountyId] = useState(0);
  const [charityId, setCharityId] = useState(0);

  useEffect(() => {
    setCharityId(0);
  }, [countyId]);

  const counties = locations.counties.filter((county) => {
    let numCharitiesForCounty = charities.reduce(function (count, charity) {
      return count + (charity.countyIds.includes(county.id) ? 1 : 0);
    }, 0);

    if (numCharitiesForCounty > 0) {
      return true;
    } else {
      return false;
    }
  });

  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Collapsable
      title="Select Charity"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >
      <div className="flex flex-col sm:flex-row w-full items-center ">
        <div className="md:w-1/2 pr-1 mb-6 md:mb-0 ">
          <div className="relative">
            <Combo
              name="countyId"
              value={countyId}
              setValue={setCountyId}
              items={counties}
              placeholder="select"
              // style={{ background: '#c7c7c7'}}
              theme=""
              label="Select a region"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            />
          </div>
        </div>
        <div className="md:w-1/2 pr-2 mb-6 md:mb-0">
          <div className="relative">
            <Combo
              name="charityId"
              value={charityId}
              setValue={setCharityId}
              items={charities.filter((c) => c.countyIds.includes(countyId))}
              disabled={
                !countyId || counties.find((c) => c.id === countyId).disabled
              }
              placeholder="select"
              theme=""
              label="Pick a charity"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button theme="small" onClick={handleSubmit} disabled={charityId === 0}>
          OK
        </Button>
      </div>
    </Collapsable>
  );
}
