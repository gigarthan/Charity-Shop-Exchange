import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="App overflow-x-hidden">
    <Head />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
