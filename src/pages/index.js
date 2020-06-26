import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';

import Home from './home';

import Layout from '~/components/Layout';

import '@shopify/polaris/styles.css';
import '~/assets/styles/index.css';

const IndexPage = () => (
  <AppProvider i18n={enTranslations}>
    <Layout>
      <Home />
    </Layout>
  </AppProvider>
);

export default IndexPage;
