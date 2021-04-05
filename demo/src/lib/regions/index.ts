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
    name: 'US East',
    flagId: 'usa',
  },
  {
    id: 'europe-west',
    name: 'Europe West',
    flagId: 'uk',
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flagId: 'brazil',
  },
  {
    id: 'australia',
    name: 'Australia',
    flagId: 'australia',
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flagId: 'south-africa',
  },
  {
    id: 'india',
    name: 'India',
    flagId: 'india',
  },
  {
    id: 'japan',
    name: 'Japan',
    flagId: 'japan',
  },
];

export const locations: Location[] = [
  {
    id: 'california',
    name: 'California',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    countryLong: 'United Kingdom',
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
