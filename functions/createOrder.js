const axios = require('axios');

require('dotenv').config();

exports.handler = async (event, _) => {
  try {
    console.log('HELLo');
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { BILLSBY_API_KEY } = process.env;
    const { body: rawBody } = event;
    const body = JSON.parse(rawBody);

    const resp = await axios.post(
      'https://public.billsby.com/api/v1/rest/core/charityshopexchange/subscriptions',
      body,
      {
        headers: {
          apikey: BILLSBY_API_KEY,
          'content-type': 'application/json',
        },
      },
    );
    return {
      statusCode: resp.status,
      body: resp.data,
    };
  } catch (error) {
    console.log('ERR');
    console.log(error.response.data);
    console.log(error.response.status);
    return {
      statusCode: 500,
      body: error.response.data,
    };
  }
};
