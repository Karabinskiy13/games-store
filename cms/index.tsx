/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from 'contentful';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  space: 'jds8b94xttqh',
  accessToken: 'OIaruK6pewI0buJQh9KvcDN0g8udKUJNPChJ5V-0tSk'
});

export default client;
