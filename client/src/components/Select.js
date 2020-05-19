import React from 'react';
// import '@vaadin/vaadin-combo-box';

import data from '../import/locations.json';

const Select = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 pr-4 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-semibold mb-2"
            htmlFor="grid-state">
            Country
          </label>
          <div className="relative">
            <select
              placeholder="select"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              {data.countries.map((country) => (
                <option
                  key={country.id}
                  timeout={500}
                  className="items-center px-2 text-gray-700"
                  country={country}>
                  {country.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 pr-4 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-semibold mb-2"
            htmlFor="grid-state">
            County
          </label>
          <div className="relative">
            <select
              placeholder="select"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              {data.counties.map((county) => (
                <option
                  key={county.id}
                  timeout={500}
                  className="items-center px-2 text-gray-700"
                  county={county}>
                  {county.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-semibold mb-2"
            htmlFor="grid-state">
            Town
          </label>
          <div className="relative">
            <select
              placeholder="select"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              {data.towns.map((town) => (
                <option
                  key={town.id}
                  timeout={500}
                  className="items-center px-2 text-gray-700"
                  town={town}>
                  {town.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
