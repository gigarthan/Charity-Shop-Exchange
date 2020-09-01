import React, { useState, useEffect } from 'react';

import { charities } from '../../../import/charities.json';
import locations from '../../../import/locations.json';
import Combo from '../../Combo';
import Collapsable from '../Collapsable';

export default function Charity(props) {
  const {
    handleChange,
    formData: { charity },
  } = props;
  const [isOpen, setisOpen] = useState(false);
  const [countyId, setCountyId] = useState(charity.countryId);
  const [charityId, setCharityId] = useState(charity.charityId);

  useEffect(() => {
    setCountyId(charity.countryId);
  }, [charity.countryId]);

  useEffect(() => {
    setCharityId(charity.charityId);
  }, [charity.charityId]);

  // useEffect(() => {
  //   setCharityId(0);
  //   handleChange({ name: "charity.charityId", value: 0 });
  // }, [countyId]);

  const counties = locations.counties.filter((county) => {
    const numCharitiesForCounty = charities.reduce((count, charityInfo) => {
      return count + (charityInfo.countyIds.includes(county.id) ? 1 : 0);
    }, 0);

    if (numCharitiesForCounty > 0) {
      return true;
    }

    return false;
  });

  //   const handleSubmit = () => {
  //     
  //   };

  return (
    <Collapsable
      title="Pick charity"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}>
      <div className="flex flex-col w-full sm:flex-row">
        <div className="payment-textbox-inner-width ">
          <div className="relative">
            <Combo
              name="countyId"
              value={countyId}
              setValue={(value) => {
                setCountyId(value);
                setCharityId(0);
                handleChange({ keyToUpdate: 'charity.countryId', value });
                handleChange({ keyToUpdate: 'charity.charityId', value: 0 });
              }}
              items={counties}
              placeholder="select"
              // style={{ background: '#c7c7c7'}}
              theme=""
              label="Select a region"
              className="charity_select_box"
              id="grid-state"
            />
          </div>
        </div>
        <div className="payment-textbox-inner-width">
          <div className="relative">
            <Combo
              name="charityId"
              value={charityId}
              setValue={(value) => {
                setCharityId(value);
                handleChange({ keyToUpdate: 'charity.charityId', value });
              }}
              items={charities.filter((c) => c.countyIds.includes(countyId))}
              disabled={
                !countyId || counties.find((c) => c.id === countyId).disabled
              }
              placeholder="select"
              theme=""
              label="Pick a charity"
              className="charity_select_box"
              id="grid-state"
            />
          </div>
        </div>
      </div>
    </Collapsable>
  );
}
