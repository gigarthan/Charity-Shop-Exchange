import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

// import { initial } from 'lodash';
import React, { useEffect, useState } from 'react';

// import unslug from 'unslug';

import Checkout from '../components/Home/Checkout/index';

// import GetStartedForm from '../src/components/Home/GetStartedForm';
import Layout from '../components/Layout';

import useFormData from '../hooks/useFormData';
import { charities } from '../import/charities.json';
import locations from '../import/locations.json';

// import useDialog from '~/components/Dialog/useDialog';

export default function FormpageTemplate() {
  let countyName;
  let charityName;
  let allPath;

  const [readOnly, setReadOnly] = useState(false);
  const [isHide, setIsHide] = useState(false);

  if (typeof window !== 'undefined') {
    let path = window.location.href.split('/');

    [, , , path] = path;
    allPath = path.split('#');
    [charityName, countyName] = allPath;
    console.log(allPath);
    console.log(charityName, countyName);
  }
  // setSelected({ selected: true });
  // charity
  const [formData, onChange] = useFormData({
    countyId: null,
    charityId: null,
    checkoutItems: [],
    delivery: {
      subscription: 'week',
      firstname: '',
      lastname: '',
      // fullname: '',
      postcode: '',
      address_1: '',
      address_2: '',
      town: '',
      county: '',
      is_used_same_address_for_billing: true,
    },
    // contact: {
    //   phone: null,
    //   email: null
    // },
    payment: {
      phone: '',
      email: '',
      isEmailedMe: false,

      card_number: '',
      expiry_at: '',
      cvv: '',
      name: '',

      billing_firstname: '',
      billing_lastname: '',
      // billing_fullname: '',
      billing_postcode: '',
      billing_address_1: '',
      billing_address_2: '',
      billing_town: '',
      billing_county: '',
    },
  });

  useEffect(() => {
    let count;

    const change = (value) => {
      // eslint-disable-next-line no-param-reassign
      let name = value;

      if (!value) return name;

      if (value.includes('-')) {
        name = value.replace(/-/g, ' ');
      }
      name = name.toLowerCase();

      // console.log(`name: ${name}`);
      return name;
    };

    const ch = charities.find(
      (charity) => change(charityName) === change(charity.name),
    );
    // county
    if (typeof countyName !== 'undefined') {
      // if (countyName.includes('-')) {
      //   countyName = countyName.replace(/-/g, ' ').toLowerCase();
      // }

      count = locations.counties.find(
        (county) => change(countyName) === change(county.name),
      );

      formData.countyId = (count || {}).id;
    }

    // formData.charityId = (ch || {}).id;

    if (ch && ch.id) {
      // console.log('=====>', ch);
      if (typeof count === 'undefined') {
        onChange({ charityId: ch.id });
      } else {
        onChange({ charityId: ch.id, countyId: count.id });
      }
    }
    setReadOnly(true);
    setIsHide(!isHide);
  }, []);

  return (
    <AppProvider i18n={enTranslations}>
      <Layout isHide={isHide}>
        <Checkout
          formData={formData}
          onChange={onChange}
          className="template bg-white pt-8 shadow-lg my-8"
          readOnly={readOnly}
        />
      </Layout>
    </AppProvider>
  );
}
