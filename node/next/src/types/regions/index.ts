export interface Region {
  id: string;
  name: string;
  flagId: string;
}

export interface Location {
  id: string;
  name: string;
  country: string;
  countryLong?: string;
}

export interface Provider {
  id: string;
  name: string;
}
