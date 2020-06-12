const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Book & DVD subscription service by Charity Shop Exchange`,
    description: `Get a regular selection of new things to read and watch, handpicked by your favourite charity shop.`,
    author: `CharityShopExchange`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Metropolis'],
          urls: ['/fonts/typeface-metropolis/fonts.css'],
        },
      },
    },
  ],
};
