import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import SEO from './Seo';

const Layout = ({ children }) => (
  <div className="App overflow-x-hidden">
    <SEO />

    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
