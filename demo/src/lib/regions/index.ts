import { find } from 'lodash';
import { Provider, Region, Location } from '@/types/regions';

const regions: Region[] = [
  {
    id: 'us-west',
    name: 'US West',
    flagId: 'usa',
  },
  {
    id: 'us-east',
    name: 'Virginia',
    flagId: 'usa',
  },
  {
    id: 'europe-west',
    name: 'London',
    flagId: 'uk',
  },
  {
    id: 'brazil',
    name: 'São Paulo',
    flagId: 'brazil',
  },
  {
    id: 'australia',
    name: 'Sydney',
    flagId: 'australia',
  },
  {
    id: 'south-africa',
    name: 'Cape Town',
    flagId: 'south-africa',
  },
  {
    id: 'india',
    name: 'Mumbai',
    flagId: 'india',
  },
  {
    id: 'japan',
    name: 'Tokyo',
    flagId: 'japan',
  },
];

export const locations: Location[] = [
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    countryLong: 'United Kingdom',
  },
  {
    id: 'california',
    name: 'California',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'virginia',
    name: 'Virginia',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo',
    country: 'Brazil',
    countryLong: 'Brazil',
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    countryLong: 'South Africa',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    countryLong: 'India',
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    countryLong: 'Australia',
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    countryLong: 'Japan',
  },
];

export const providers: Provider[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
  },
];

export const getRegion = (regionId: string): Region => {
  const region = find(regions, { id: regionId });

  return region || regions[0];
};

export const getLocation = (locationId: string): Location => {
  const location = find(locations, { id: locationId });

  return location || locations[0];
};

export const getProvider = (providerId: string): Provider => {
  const provider = find(providers, { id: providerId });

  return provider || providers[0];
};
