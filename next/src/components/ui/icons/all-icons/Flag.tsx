import React, { FC } from 'react';

interface Props {
  countryCode: string;
}

const FlagIcon: FC<Props> = ({ countryCode }) => {
  const source = `https://assets.nubo.app/demo/flags/${countryCode}.svg`;

  return <img src={source} alt={countryCode} className="w-full" />;
};

export default FlagIcon;
