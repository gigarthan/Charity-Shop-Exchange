import React from 'react';

import Layout from '~/components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div className="bg-new-gray pt-8 sm:pt-12 pb-12 sm:pb-20 min-h-full">
      <div className="sm:max-w-screen-lg mx-auto px-3 sm:px-8">
        <div className="font-header mx-auto text-3xl sm:text-5xl font-bold text-new-red mb-12 sm:mb-20 text-center">
          404 Page Not Found
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
