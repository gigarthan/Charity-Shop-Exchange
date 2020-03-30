import React from 'react';
import Layout from "../components/Layout";

export default function Privacy() {

  return (
    <Layout>

      <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto px-3 sm:px-0 ">

        <h1 className="text-2xl sm:text-3xl font-semibold px-3 font-bold text-center mt-12 mb-8 sm:mb-12 text-red-700 leading-snug">
          Charity Shop Exchange
          <span className="block">
            Privacy Policy
            </span>
        </h1>

        <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">

          <p className="mb-4">Your privacy is important to us. It is Charity Shop Exchange's policy to respect your privacy regarding any information we may collect from you across our website, https://charityshopexchange.com.</p>

          <p className="mb-4">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

          <p className="mb-4">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>

          <p className="mb-4">We contract with third party service providers and suppliers to provide certain services. We may share your personal data with the following parties, for the purposes noted below:</p>

          <ul className="list-disc list-inside">
            <li className="mb-4">the party who provides our delivery services, which is currently Royal Mail.</li>

            <li className="mb-4">the party who provides our subscription payment services, which is currently Stripe.</li>

            <li className="mb-4">our ecommerce platform provider, which is currently Subbly.</li>

            <li className="mb-4">our partner charities who supply the items for subscribers.</li>
          </ul>

          <p className="mb-4">Except as provided above, we will not share personal information with any other third parties without informing you beforehand, unless required by, or in connection with, law and / or regulatory requirements.</p>

          <p className="mb-4">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

          <p className="mb-4">You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>

          <p className="mb-4">Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us by email: together@charityshopexchange.com</p>

          <p className="mb-4">You are advised to review this Privacy Policy periodically for any changes.</p>

          <p className="mb-4">This policy is effective as of 1 April 2020.</p>

        </div>

      </div>

    </Layout>
  );
}