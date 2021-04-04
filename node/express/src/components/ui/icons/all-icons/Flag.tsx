import React, { FC } from 'react';
import { CountryCode } from '@/types/regions';

interface Props {
  countryCode: CountryCode;
}

const FlagIcon: FC<Props> = ({ countryCode }) => {
  const source = `https://assets.nubo.app/demo/flags/${countryCode}.svg`;

  return <img src={source} alt={countryCode} className="w-full" />;
};

export default FlagIcon;
