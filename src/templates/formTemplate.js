import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

// import { initial } from 'lodash';
import React, { useEffect, useState } from 'react';

// import unslug from 'unslug';

import Checkout from '../components/Home/Checkout/index';

// import GetStartedForm from '../src/components/Home/GetStartedForm';
import Layout from '../components/Layout';

import { charities } from '../import/charities.json';
import locations from '../import/locations.json';

import useFormData from '~/hooks/useFormData';

// import useDialog from '~/components/Dialog/useDialog';

export default function FormpageTemplate() {
  let countyName = '';
  let charityName = '';

  if (typeof window !== 'undefined') {
    const path = window.location.href.split('/');
    charityName = path[3];
  }

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
    if (charityName.indexOf('-') != null) {
      charityName = charityName.replace(/-/g, ' ').toLowerCase();
    }

    const change = (value) => {
      // eslint-disable-next-line no-param-reassign
      let name = '';

      if (value.indexOf('-') != null)
        name = value.replace(/-/g, ' ').toLowerCase();

      name = value.toLowerCase();

      return name;
    };

    const ch = charities.find(
      (charity) => charityName === change(charity.name),
    );

    // county
    if (countyName.indexOf('-') != null) {
      countyName = countyName.replace(/-/g, ' ').toLowerCase();
    }
    // const count = locations.counties.find(
    //   (county) => countyName === change(county.name),
    // );

    formData.charityId = (ch || {}).id;
    // formData.countyId = (count || {}).id;
  }, []);

  return (
    <AppProvider i18n={enTranslations}>
      <Layout>
        <Checkout
          formData={formData}
          onChange={onChange}
          className="template my-8"
        />
      </Layout>
    </AppProvider>
  );
}
