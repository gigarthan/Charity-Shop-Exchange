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
      return setError('Please use a valid Email');

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
        // setContact({});
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => setError(error));
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
        <div className="font-header text-lg leading-normal sm:text-2xl sm:text-4xl px-8 sm:px-0 text-center font-medium max-w-screen-sm sm:max-w-screen-md mx-auto tracking-wide text-white mb-2 sm:mb-4 pt-12 sm:pt-20 pb-20 sm:pb-32">
          By selling books & DVDs on a subscription basis we give charity shops
          a simple way to earn recurring revenue.
        </div>
        <div className="flex flex-col items-center bg-gray-100">
          <div className="-mt-10 sm:-mt-20 mx-auto w-11/12 max-w-4xl bg-white py-12 px-4 sm:px-20 mb-40 rounded-lg shadow-2xl">
            <div>
              <p className="text-xs sm:text-xl font-medium sm:font-semibold mt-4 text-gray-600 leading-normal">
                Our website takes the orders, we collect the payments, and then
                we pay you every time you send items to subscribers.
              </p>
              <p className="text-xs sm:text-xl font-medium sm:font-semibold mt-4 text-gray-600 leading-normal">
                There is no cost to join, just a commitment to delighting a new
                breed of customer! Enquire below and we&apos;ll get back to you
                right away.
              </p>
              <div className="bg-gray-400 h-px mt-8 mb-10"> </div>

              <div>
                <form
                  onSubmit={handleSubmit}
                  className=" w-11/12 mx-auto pt-6 pb-8 mb-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-medium sm:font-semibold mb-4"
                      htmlFor="name">
                      Your name:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose border-gray-300 rounded w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="cname">
                      Your charity:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose border-gray-300 rounded w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="position">
                      Your responsibilities at the charity:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="email">
                      Email:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="number">
                      Mobile number:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="message">
                      Anything else we should know
                    </label>
                    <textarea
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      type="text"
                      placeholder=""
                      value={contact.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    {error && (
                      <p className="text-red-500 font-semibold">{error}</p>
                    )}
                    {success ? (
                      <button
                        className="bg-green-700 rounded-full hover:bg-green-800 text-white text-md font-medium py-3 px-20 mt-6 sm:mt-8 focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled>
                        Thank you
                      </button>
                    ) : (
                      <button
                        className="bg-red-700 rounded-full hover:bg-red-800 text-white text-md font-medium py-3 px-20 mt-6 sm:mt-8 focus:outline-none focus:shadow-outline"
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
