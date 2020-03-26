import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {

  return ( 
    <div className="App bg-gray-100">
      <div className="w-screen">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );


}