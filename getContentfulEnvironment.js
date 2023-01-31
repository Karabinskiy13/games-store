/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const contentfulManagement = require('contentful-management');
import dotenv from 'dotenv';

dotenv.config();

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-9dKWzcOTDk_4RaQS4e0HslYq73KTdTSOKrb7wwADtJ8'
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'));
};
