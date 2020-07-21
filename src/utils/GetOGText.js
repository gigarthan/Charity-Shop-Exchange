import getCountyIdFromURL from './GetCountyId';

import charities from '~/import/charities.json';
import locations from '~/import/locations.json';

function shuffleArray(arr) {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
}

function createOGText(charitiesList) {
  let ogText = `Supplied by local charities`;

  for (let i = 0; i < 3; i += 1) {
    if (charitiesList.length === 0) {
      break;
    }

    const currentCharity = charitiesList.shift();
    if (i === 0) {
      ogText += ` including **${currentCharity}**`;
    } else if (i === 2 || charitiesList.length === 0) {
      ogText += ` and **${currentCharity}**`;
    } else {
      ogText += `, **${currentCharity}**`;
    }
  }

  ogText += '..png';
  ogText = ogText.split(' ').join('%20').split(',').join('%2C');

  return ogText;
}

function getOGText() {
  const countyIdFromURL = getCountyIdFromURL(locations.counties);
  const charitiesList = charities.charities;

  const validCharities = [];
  charitiesList.map((charity) => {
    const charityCounties = charity.countyIds;
    if (
      (countyIdFromURL && charityCounties.includes(countyIdFromURL)) ||
      !countyIdFromURL
    ) {
      validCharities.push(charity.name);
    }

    return true;
  });

  const shuffledCharities = shuffleArray(validCharities);
  const ogText = createOGText(shuffledCharities);
  return ogText;
}

export default getOGText;
