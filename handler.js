'use strict';
const urlMetadata = require('url-metadata')

module.exports.parse = async (event) => {

  const urlInput = JSON.parse(event.body).url;
  try {
    const metadata = await urlMetadata(urlInput);
    return {
      statusCode: 200,
      body: JSON.stringify( metadata ),
    };
  } catch(error) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify( error ),
    };
  }
};
