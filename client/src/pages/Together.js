import React from 'react';

import bicycle from '../assets/img/np_newspaper-boy_858447_FFF8E4.svg';
import uk from '../assets/img/np_uk_2518810_FFF8E4.svg';
import Layout from '../components/Layout';

export default function Together() {
  return (
    <Layout>
      <div className="bg-new-navy">
        <div>
          <div className="font-header text-lg sm:leading-normal sm:text-4xl px-8 sm:px-0 text-center font-medium max-w-screen-sm sm:max-w-screen-md mx-auto sm:tracking-wide text-new-gray mb-2 sm:mb-4 pt-12 sm:pt-20 pb-12 sm:pb-32">
            <img
              className="w-8 sm:w-12 inline-block pb-4 mr-2"
              src={bicycle}
              alt="bicycle"
            />{' '}
            Connect the dots{' '}
            <img
              className="w-8 sm:w-12 inline-block pb-8 ml-2"
              src={uk}
              alt="uk"
            />
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100">
          <div className="-mt-10 sm:-mt-20 mx-auto w-11/12 max-w-4xl bg-white mb-40 rounded-lg shadow-2xl">
            <div className="py-12 px-4 sm:px-20">
              <h1 className="font-header text-center text-lg sm:text-3xl font-bold text-gray-700 mb-12 tracking-wide leading-snug">
                The Charity Shop Exchange service enables charities to continue
                to raise funds by delivering their shop’s products to a wide
                audience who value them.
              </h1>
              <p className="text-xs sm:text-lg  font-medium sm:font-semibold mt-4 text-gray-600 leading-normal">
                People are needing new things to read and watch, especially
                whilst stuck in their own homes, and the Charity Shop Exchange
                subscription service facilitates this in an economical way.
              </p>
              <p className="text-xs sm:text-lg  font-medium sm:font-semibold mt-12 text-gray-600 leading-normal">
                For charity shops, the concept is designed to help them sell
                their books & DVDs to a wider audience. But charity shops are
                closed and face a much tougher path back to normality than most
                retail businesses. Even when some lockdown restrictions are
                eased, charity shops rely heavily upon volunteers, many who are
                in the vulnerable category themselves or may live with someone
                who is; so it could be much longer before staffed shops are
                viable.
              </p>
              {/* <div className="bg-gray-400 h-px mt-8 mb-10"> </div> */}
            </div>
            <div className="mt-20 pt-12 pb-32 px-4 sm:px-20 bg-new-gray">
              <h1 className="font-header text-center text-lg sm:text-3xl font-bold text-gray-700 mb-12 tracking-wide leading-snug">
                We need your help to enable charity shops to continue raising
                much needed funds.
              </h1>
              <p className="text-xs sm:text-lg font-medium sm:font-semibold mt-4 text-gray-600 leading-normal">
                Are you a car dealership, supermarket, pub, garden centre or
                community organisation that can help? We&apos;re ready to take
                the orders, the books & DVDs are already set aside in peoples
                home, we just need you to appeal for donations on behalf of your
                favourite charity and to become a book & DVD drop-off point.
              </p>
              <p className="text-xs sm:text-lg  font-medium sm:font-semibold mt-12 text-gray-600 leading-normal">
                The role you play will help connect the dots between donated
                books & DVDs, revenue for local charities, and the doorsteps of
                people isolated. Together we can bring a bit of joy into many
                people&apos;s lives.
              </p>
              <div className="mx-auto flex justify-center">
                <a href="mailto:together@charityshopexchange.com" target="_top">
                  <button
                    className="bg-new-navy py-2 sm:py-3 px-12 sm:px-12 text-sm sm:text-lg mt-20 font-base rounded-full text-white  hover:border-none focus:outline-none focus:shadow-outline hover:bg-red-700 "
                    type="submit">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
