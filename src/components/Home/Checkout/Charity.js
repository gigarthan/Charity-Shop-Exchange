import React, { useState, useEffect } from 'react';

import slug from 'slug';

import { charities } from '../../../import/charities.json';
import locations from '../../../import/locations.json';
import Combo from '../../Combo';
import Collapsable from '../Collapsable';

export default function Charity(props) {
  const { handleChange, formData } = props;
  const [isOpen, setisOpen] = useState(false);
  const [countyId, setCountyId] = useState(formData.countyId);
  const [charityId, setCharityId] = useState(formData.charityId);

  const onSelectCounty = (value) => {
    // console.log(`Charity: ${formData.countyId}`);
    setCountyId(value);
    setCharityId(0);
    handleChange({ countyId, charityId });
    // const count = locations.counties.find((county) => county.id === value);
    // window.history.pushState({}, window.title, `/${slug(count.name)}/`);
  };

  const onSelectCharity = (value) => {
    setCharityId(value);
    handleChange({});

    const ch = charities.find((charity) => charity.id === value);

    const count = locations.counties.find((county) => county.id === countyId);
    window.history.pushState(
      {},
      window.title,
      `/${slug(count.name)}/${slug(ch.name)}`,
    );
  };

  useEffect(() => {
    // const ch = charities.filter((charity) => charity.id === charityId);
    // setCharity(ch[0].name);
    // const count = locations.counties.filter((county) => county.id === countyId);
    // setCounty(count[0].name);
  }, []);

  //   useEffect(() => {
  //     setCountyId(formData.countryId);
  //     setCharityId(formData.charityId);
  //   }, [charityId, countyId]);

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
              setValue={onSelectCounty}
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
              setValue={onSelectCharity}
              items={charities.filter((c) => c.countyIds.includes(countyId))}
              // disabled={
              //   !countyId || counties.find((c) => c.id === countyId).disabled
              // }
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
