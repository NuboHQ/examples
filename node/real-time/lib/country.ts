import { IncomingMessage } from 'http';

export const getCountryFromRequest = (req: IncomingMessage) => {
  return req.headers['cf-ipcountry'] || null;
};
