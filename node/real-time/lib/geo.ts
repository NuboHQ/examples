import geoip from 'geoip-lite';

export const getGeo = (ip: string) => {
  return geoip.lookup(ip);
};
