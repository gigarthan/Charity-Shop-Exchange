import React, { useState, useEffect } from 'react';

import slug from 'slug';

import { charities } from '../../../import/charities.json';
import locations from '../../../import/locations.json';
import Combo from '../../Combo';
import Collapsable from '../Collapsable';

export default function Charity(props) {
  const { handleChange, formData, readOnly } = props;
  console.log('Charity -> readOnly', readOnly);
  const [isOpen, setisOpen] = useState(false);
  const [countyId, setCountyId] = useState(formData.countyId);
  const [charityId, setCharityId] = useState(formData.charityId);
  // const [intialize, setInitilaize] = useState(1);

  useEffect(() => {
    if (!formData.charityId) return;
    setCharityId(formData.charityId);
  }, [formData.charityId]);

  useEffect(() => {
    if (formData.countyId) setCountyId(formData.countyId);
  }, [formData.countyId]);

  const onSelectCounty = (value) => {
    setCountyId(value);
    setCharityId(0);
    handleChange({ countyId, charityId });
  };

  const onSelectCharity = (value) => {
    setCharityId(value);
    handleChange({});

    const ch = charities.find((charity) => charity.id === value);

    const count = locations.counties.find((county) => county.id === countyId);

    if (typeof window !== 'undefined') {
      formData.charityId = ch.id;
      let url = `/${slug(ch.name)}`;

      if (count) {
        // window.location.href = `#${slug(count.name)}`;
        url += `#${slug(count.name)}`;
        formData.countyId = count.id;
      }

      window.history.pushState({}, window.title, url);
    }
  };

  const counties = locations.counties.filter((county) => {
    const numCharitiesForCounty = charities.reduce((count, charityInfo) => {
      return count + (charityInfo.countyIds.includes(county.id) ? 1 : 0);
    }, 0);

    if (numCharitiesForCounty > 0) {
      return true;
    }

    return false;
  });

  const disableInput = readOnly ? { readOnly: true } : {};

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
              setValue={onSelectCounty}
              items={counties}
              placeholder="select"
              // style={{ background: '#c7c7c7'}}
              // disabled="disabled"
              {...disableInput}
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
              setValue={onSelectCharity}
              items={charities}
              // disabled={
              //   !countyId || counties.find((c) => c.id === countyId).disabled
              // }

              {...disableInput}
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
