// eslint-disable-next-line import/no-self-import
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const { slash } = require('gatsby-core-utils');

const slug = require('slug');

const charities = require('./src/import/charities.json');

const locations = require('./src/import/locations.json');

console.log(locations.countries);

// eslint-disable-next-line no-unused-vars

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/formTemplate.js');
  charities.charities.forEach((charity) => {
    // let len = charity.countyIds.length;
    charity.countyIds.forEach((id) => {
      locations.counties.forEach((county) => {
        if (id === county.id) {
          let name = charity.name.replace(' ', '-');
          name = name.replace(' ', '-');

          console.log(name);

          createPage({
            path: `/${slug(county.name)}/${slug(charity.name)}/`,
            component: slash(postTemplate),
            context: {
              county_name: county.name,
              charity_name: charity.name,
              county_id: county.id,
              charity_id: charity.id,
            },
          });
        }
      });
    });
  });
};

/*
locations.counties.forEach((county) => {
  charities.forEach((charity) => {
    let size = charity.countyIds.size();
    for(i=0;i<size;i++){

    }
    if (county === charity)
      createPage({
        path: `/$slug()/`,
      });
  });
});

*/
