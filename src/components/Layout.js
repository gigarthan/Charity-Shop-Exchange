import PropTypes from 'prop-types';
import React from 'react';

import TemplateHeader from '../templateHeader';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const Layout = ({ children, isHide }) => (
  <div className="App overflow-x-hidden">
    <Head />
    <Header />
    {isHide ? <TemplateHeader /> : null}
    {children}
    <Footer isHide={isHide} />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
