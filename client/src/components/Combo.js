import React, {useEffect, useState, useRef} from 'react';
import '@vaadin/vaadin-combo-box';


import data from '../import/locations.json';

export default function Combo() {

  const countryCombo = useRef(null);
  const countyCombo = useRef(null);
  const townCombo = useRef(null);
  const [countryId, setCountryId] = useState(0);
  const [countyId, setCountyId] = useState(0);
  const [townId, setTownId] = useState(0);

  useEffect( () => {

    // Set up Country combo box
    countryCombo.current.items = data.countries;
    countryCombo.current.itemValuePath = 'id';
    countryCombo.current.itemLabelPath = 'name';
    countryCombo.current.value = countryId;
    countryCombo.current.addEventListener('change', handleChange);
    
    // Set up County combo box
    countyCombo.current.items = data.counties.filter(c => c.countryId === countryId);
    countyCombo.current.itemValuePath = 'id';
    countyCombo.current.itemLabelPath = 'name';
    countyCombo.current.value = countyId;
    countyCombo.current.addEventListener('change', handleChange);
    countyCombo.current.disabled = !countryId;

    // Set up Town combo box
    townCombo.current.items = data.towns.filter(c => c.countyId === countyId);
    townCombo.current.itemValuePath = 'id';
    townCombo.current.itemLabelPath = 'name';
    townCombo.current.value = townId;
    townCombo.current.addEventListener('change', handleChange);
    townCombo.current.disabled = !countyId;

  }, [countryId, countyId, townId])

  // Handle changes to the combo boxes
  function handleChange(e) {
    switch(e.target.name) {
      case 'countryId':
        setCountryId(e.target.value);
        break;
      case 'countyId':
        setCountyId(e.target.value);
        break;
      case 'townId':
        setTownId(e.target.value);
        break;
      default:  
    }
  }

  return (
    <>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label style={{color: 'white'}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          Country
      </label>
        <div className="relative">
          <vaadin-combo-box name="countryId" style={{backgroundColor: '#d2d9e1'}} ref={countryCombo} placeholder="select" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" />
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label style={{color: 'white'}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          County
      </label>
        <div className="relative">
          <vaadin-combo-box name="countyId" style={{backgroundColor: '#d2d9e1'}} ref={countyCombo} placeholder="select" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" />
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label style={{color: 'white'}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          Town
      </label>
        <div className="relative">
          <vaadin-combo-box name="townId" style={{backgroundColor: '#d2d9e1'}} ref={townCombo} placeholder="select" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" />
        </div>
      </div>
    </>
  );

}
