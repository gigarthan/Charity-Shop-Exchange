const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Charity Shop Exchange | Books &amp; DVDs Delivered from Charity Shops to You`,
    description: `Fight isolation with books and DVDs! Charity Shop Exchange collects a selection of books and DVDs from local charity shops and delivers weekly, bi-weekly or monthly - it's up to you.`,
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
