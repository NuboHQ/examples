import geoip from 'geoip-lite';

export const getGeo = (ip: string) => {
  return geoip.lookup('2a01:4b00:8861:3700:c5dd:667:d9fd:8084');
};
