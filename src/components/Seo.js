import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import favicon128 from '~/assets/img/favicon-128.png';
import favicon from '~/assets/img/favicon.png';
import og from '~/assets/img/og.png';
// import getOGText from '~/utils/GetOGText';

function SEO({ description, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '128x128',
          href: `${favicon128}`,
        },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `theme-coolor`,
          content: `#fff`,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
        {
          charset: `utf-8`,
        },
        {
          property: `og:title`,
          content: `Charity Shop Exchange`,
        },
        {
          property: `og:image`,
          // content: `https://og-image-sooty.now.sh/${getOGText()}?theme=light&md=1&fontSize=70px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fzeit-black-triangle.svg`,
          content: `https://charityshopexchange.com${og}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `https://charityshopexchange.com`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
