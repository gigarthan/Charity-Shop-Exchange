/* eslint-disable no-useless-escape */
import React, { useState } from 'react';

import Layout from '~/components/Layout';

export default function Register() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');
  };

  const [contact, setContact] = useState({});

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isValidEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    // Validate email

    if (!isValidEmail(contact.email))
      return setError('Please use a valid email address');

    const state = {
      name: contact.name,
      email: contact.email,
      message: contact.message,
      cname: contact.cname,
      number: contact.number,
      position: contact.position,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then((_) => {
        setSuccess(true);
        setContact({
          name: '',
          email: '',
          message: '',
          cname: '',
          number: '',
          position: '',
        });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => setError(err));

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedContact = {
      ...contact,
      [name]: value,
    };
    setContact(updatedContact);
  };

  return (
    <Layout>
      <div className="bg-new-navy">
        <div className="max-w-screen-sm px-8 pt-12 pb-20 mx-auto mb-2 text-lg font-medium leading-normal tracking-wide text-center text-white font-header sm:text-4xl sm:px-0 sm:max-w-screen-md sm:mb-4 sm:pt-20 sm:pb-32">
          By selling books & DVDs on a subscription basis we give charity shops
          a simple way to earn recurring revenue.
        </div>
        <div className="flex flex-col items-center bg-gray-100">
          <div className="w-11/12 max-w-4xl px-4 py-12 mx-auto mb-40 -mt-10 bg-white rounded-lg shadow-2xl sm:-mt-20 sm:px-20">
            <div>
              <p className="mt-4 text-xs font-medium leading-normal text-gray-600 sm:text-xl sm:font-semibold">
                Our website takes the orders, we collect the payments, and then
                we pay you every time you send items to subscribers.
              </p>
              <p className="mt-4 text-xs font-medium leading-normal text-gray-600 sm:text-xl sm:font-semibold">
                There is no cost to join, just a commitment to delighting a new
                channel of customers! Enquire below and we&apos;ll get back to
                you right away.
              </p>
              <div className="h-px mt-8 mb-10 bg-gray-400"> </div>

              <div>
                <form
                  onSubmit={handleSubmit}
                  className="w-11/12 pt-6 pb-8 mx-auto mb-4 ">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="mb-12">
                    <label
                      className="block mb-4 text-sm font-medium text-gray-600 sm:text-base sm:font-semibold"
                      htmlFor="name">
                      Your name:
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded appearance-none sm:text-base tracking-loose sm:py-4 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder=""
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block mb-4 text-sm font-semibold text-gray-600 sm:text-base"
                      htmlFor="cname">
                      Your charity:
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded appearance-none sm:text-base tracking-loose sm:py-4 focus:outline-none focus:shadow-outline"
                      id="cname"
                      name="cname"
                      type="text"
                      placeholder=""
                      value={contact.cname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block mb-4 text-sm font-semibold text-gray-600 sm:text-base"
                      htmlFor="position">
                      Your responsibilities at the charity:
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded appearance-none sm:text-base tracking-loose sm:py-4 focus:outline-none focus:shadow-outline"
                      id="position"
                      name="position"
                      type="text"
                      placeholder=""
                      value={contact.position}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block mb-4 text-sm font-semibold text-gray-600 sm:text-base"
                      htmlFor="email">
                      Email:
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded appearance-none sm:text-base tracking-loose sm:py-4 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="text"
                      placeholder=""
                      value={contact.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block mb-4 text-sm font-semibold text-gray-600 sm:text-base"
                      htmlFor="number">
                      Mobile number:
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded appearance-none sm:text-base tracking-loose sm:py-4 focus:outline-none focus:shadow-outline"
                      id="number"
                      name="number"
                      type="text"
                      placeholder=""
                      value={contact.number}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block mb-4 text-sm font-semibold text-gray-600 sm:text-base"
                      htmlFor="message">
                      Anything else we should know
                    </label>
                    <textarea
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded appearance-none sm:text-base tracking-loose sm:py-4 focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      type="text"
                      placeholder=""
                      value={contact.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    {error ? (
                      <p className="font-semibold text-red-500">{error}</p>
                    ) : (
                      <p className="font-semibold text-transparent cursor-default">
                        &nbsp;
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-center">
                    {success ? (
                      <button
                        className="px-20 py-3 mt-6 font-medium text-white bg-green-700 rounded-full hover:bg-green-800 text-md sm:mt-8 focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled>
                        Thank you
                      </button>
                    ) : (
                      <button
                        className="px-20 py-3 mt-6 font-medium text-white bg-red-700 rounded-full hover:bg-red-800 text-md sm:mt-8 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
