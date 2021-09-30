import React from 'react';
import { NextPage } from 'next';
import { BasicLayout } from '@/components/page-layouts';
import { FlagIcon } from '@/components/ui/icons';
import Map from './map/Map';
import { getLocation, getProvider, getRegion } from '@/lib/regions';

interface Props {
  appNameId: string;
  regionId: string;
  locationId: string;
  providerId: string;
}

const HomePage: NextPage<Props> = ({
  appNameId,
  regionId,
  locationId,
  providerId,
}) => {
  const region = getRegion(regionId);
  const location = getLocation(locationId);
  const provider = getProvider(providerId);

  return (
    <BasicLayout pageId="home" title={`${appNameId} - Nubo Demo`}>
      {region && location && provider ? (
        <>
          <div className="grid gap-y-4 md:grid-cols-2 md:gap-10 max-w-4xl m-auto px-10">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl w-full shadow-glow md:flex md:items-center text-center md:text-left">
              <div className="m-auto mb-5 md:m-0 md:mr-8 w-9">
                <FlagIcon countryCode={region.flagId} />
              </div>

              <div>
                <div className="text-xxs font-bold text-gray-400 uppercase mb-0.5">
                  {region.name}
                </div>
                <div className="text-l font-medium text-black">
                  {location.name}, {location.country}
                </div>
              </div>
            </div>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl w-full shadow-glow md:flex md:items-center text-center md:text-left">
              <div className="m-auto mb-5 md:m-0 md:mr-8 w-12">
                <img
                  className="w-12 ml-2"
                  src={`https://assets.nubo.app/demo/providers/${provider.id}.svg`}
                  alt={provider.name}
                />
              </div>

              <div>
                <div className="text-xxs font-bold text-gray-400 uppercase mb-0.5">
                  Cloud Provider
                </div>
                <div className="text-l font-medium text-black">
                  {provider.name}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl m-auto px-10 mt-20 lg:pl-20">
            <Map currentRegionId={region.id} setRegion={() => {}} />
          </div>
        </>
      ) : (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Missing region
        </div>
      )}
    </BasicLayout>
  );
};

export default HomePage;
