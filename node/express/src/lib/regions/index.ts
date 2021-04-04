import { find } from 'lodash';
import { CountryCode, Provider, Region } from '@/types/regions';

const REGIONS: Region[] = [
  {
    id: 'us-west',
    name: 'California',
    country: 'US',
    countryLong: 'United States',
    flagId: CountryCode.US,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
  {
    id: 'us-east',
    name: 'Virginia',
    country: 'US',
    countryLong: 'United States',
    flagId: CountryCode.US,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
  {
    id: 'europe-west',
    name: 'London',
    country: 'UK',
    countryLong: 'United Kingdom',
    flagId: CountryCode.UK,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
  {
    id: 'brazil',
    name: 'São Paulo',
    country: 'Brazil',
    flagId: CountryCode.BRAZIL,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
  {
    id: 'australia',
    name: 'Sydney',
    country: 'Australia',
    flagId: CountryCode.AUSTRALIA,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
  {
    id: 'south-africa',
    name: 'Cape Town',
    country: 'South Africa',
    flagId: CountryCode.SOUTH_AFRICA,
    providers: [Provider.AWS, Provider.AZURE],
  },
  {
    id: 'india',
    name: 'Mumbai',
    country: 'India',
    flagId: CountryCode.INDIA,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
  {
    id: 'japan',
    name: 'Tokyo',
    country: 'Japan',
    flagId: CountryCode.JAPAN,
    providers: [Provider.AWS, Provider.GOOGLE_CLOUD, Provider.AZURE],
  },
];

export const getRegion = (regionId: string): Region => {
  const region = find(REGIONS, { id: regionId });

  return region || REGIONS[0];
};
