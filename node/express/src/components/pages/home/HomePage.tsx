import React, { useState } from 'react';
import { NextPage } from 'next';
import { BasicLayout } from '@/components/page-layouts';
import { FlagIcon } from '@/components/ui/icons';
import Map from './map/Map';
import { getRegion } from '@/lib/regions';

interface Props {
  defaultRegionId: string;
}

const HomePage: NextPage<Props> = ({ defaultRegionId }) => {
  const [currentRegionId, setCurrentRegionId] = useState(defaultRegionId);
  const defaultRegion = getRegion(defaultRegionId);
  const region = getRegion(currentRegionId);

  const setRegion = (regionId: string) => {
    setCurrentRegionId(regionId);
  };

  return (
    <BasicLayout pageId="home" title="Nubo Demo - Build Truly Global Apps">
      <div className="max-w-lg md:max-w-lg lg:max-w-2xl m-auto p-10 text-center md:text-lg lg:text-xl mt-7">
        Nubo automatically routes users to the closest deployment.
        <br className="hidden lg:inline-block" /> The closest region to you is{' '}
        <span className="whitespace-nowrap">
          {defaultRegion.name},{' '}
          {defaultRegion.countryLong || defaultRegion.country}
        </span>
        .
      </div>

      <div className="grid gap-y-4 md:grid-cols-2 md:gap-10 max-w-4xl m-auto px-10 mt-10">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl w-full shadow-glow md:flex md:items-center text-center md:text-left">
          <div className="m-auto mb-5 md:m-0 md:mr-5 w-9">
            <FlagIcon countryCode={region.flagId} />
          </div>

          <div>
            <div className="text-xxs font-bold text-gray-400 uppercase mb-0.5">
              {currentRegionId === defaultRegionId
                ? 'Your closest region'
                : 'Region'}
            </div>
            <div className="text-l font-medium text-black">
              {region.name}, {region.country}
            </div>
          </div>
        </div>

        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl flex justify-center items-center w-full h-24 shadow-glow">
          <div className="text-l font-medium text-black mr-5">Providers</div>
          {region.providers.map((providerId) => (
            <img
              key={providerId}
              className="w-12 ml-2"
              src={`https://assets.nubo.app/demo/providers/${providerId}.svg`}
              alt={providerId}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl m-auto px-10 mt-20">
        <Map currentRegionId={region.id} setRegion={setRegion} />
      </div>
    </BasicLayout>
  );
};

export default HomePage;
