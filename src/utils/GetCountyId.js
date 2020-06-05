import { globalHistory } from '@reach/router';

function getCountyIdFromURL(counties) {
  const host = globalHistory.location.hostname || '';
  const domainParts = host.replace('www.', '').split('.');
  const subdomain = domainParts[0];

  const normalizedSubdomain = subdomain.trim().toLowerCase();
  const matchedCounty = counties.find((county) => {
    const normalizedCountyName = county.name.toLowerCase().split(' ').join('-');
    return normalizedCountyName === normalizedSubdomain;
  });

  return matchedCounty !== undefined ? matchedCounty.id : 0;
}

export default getCountyIdFromURL;
