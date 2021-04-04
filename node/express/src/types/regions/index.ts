export enum CountryCode {
  AUSTRALIA = 'australia',
  BRAZIL = 'brazil',
  INDIA = 'india',
  JAPAN = 'japan',
  SOUTH_AFRICA = 'south-africa',
  UK = 'uk',
  US = 'usa',
}

export enum Provider {
  AZURE = 'azure',
  AWS = 'aws',
  GOOGLE_CLOUD = 'google-cloud',
}

export interface Region {
  id: string;
  name: string;
  country: string;
  countryLong?: string;
  flagId: CountryCode;
  providers: Provider[];
}
