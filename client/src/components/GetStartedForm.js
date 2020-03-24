import React, {useState, useEffect} from 'react';
import Combo from './Combo';
import data from '../import/locations.json';

export default function GetStartedForm() {

  const [countryId, setCountryId] = useState(0);
  const [countyId, setCountyId] = useState(0);
  const [townId, setTownId] = useState(0);

  // Clear out a 'child' combo if its 'parent' is changed

  useEffect( () => {
    setCountyId(0);
  }, [countryId]);

  useEffect( () => {
    setTownId(0);
  }, [countyId]);

  return (
    <>
      <div className="flex mb-12">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label style={{ color: 'white' }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Country
          </label>
          <div className="relative">
            <Combo
              name="countryId"
              value={countryId}
              setValue={setCountryId}
              items={data.countries}
              placeholder="select"
              style={{ backgroundColor: '#d2d9e1' }}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label style={{ color: 'white' }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            County
          </label>
          <div className="relative">
            <Combo
              name="countyId"
              value={countyId}
              setValue={setCountyId}
              items={data.counties.filter(c => c.countryId === countryId)}
              disabled={!countryId}
              placeholder="select"
              style={{ backgroundColor: '#d2d9e1' }}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label style={{ color: 'white' }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Town
          </label>
          <div className="relative">
            <Combo
              name="townId"
              value={townId}
              setValue={setTownId}
              items={data.towns.filter(c => c.countyId === countyId)}
              disabled={!countyId}
              placeholder="select"
              style={{ backgroundColor: '#d2d9e1' }}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="border-2 border-gray-400 text-gray-400 px-12 py-2 rounded-full bg-transparent hover:bg-red-700 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Get Started
        </button>
      </div>
    </>
  );

}
