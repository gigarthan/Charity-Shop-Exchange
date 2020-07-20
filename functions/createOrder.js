const axios = require('axios');

require('dotenv').config();

exports.handler = async (event, _) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { BILLSBY_API_KEY } = process.env;
  const { body } = event;

  axios
    .post(
      'https://public.billsby.com/api/v1/rest/core/charityshopexchange/subscriptions',
      body,
      {
        headers: {
          ApiKey: BILLSBY_API_KEY,
        },
      },
    )
    .then((res) => {
      return {
        statusCode: res.statusCode,
        body: res,
      };
    })
    .catch((error) => {
      console.log(error);
    });
};
