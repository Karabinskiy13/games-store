/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const contentfulManagement = require('contentful-management');
// import dotenv from 'dotenv';

// dotenv.config();

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-KSqR9yCpjH1v3PUnEh_dZjt923kWoPlyg7gTj6KKZf8'
  });

  return contentfulClient.getSpace('jds8b94xttqh').then((space) => space.getEnvironment('master'));
};
