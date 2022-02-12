import { BasicLayout } from '@/components/page-layouts';
import { getLocation, getProvider, getRegion } from '@/lib/regions';
import { NextPage } from 'next';
import React from 'react';
import Map from './map/Map';

interface Props {
  serviceNameId: string;
  regionId: string;
  locationId: string;
  providerId: string;
}

const HomePage: NextPage<Props> = ({
  serviceNameId,
  regionId,
  locationId,
  providerId,
}) => {
  const region = getRegion(regionId);
  const location = getLocation(locationId);
  const provider = getProvider(providerId);

  return (
    <BasicLayout pageId="home" title={`${serviceNameId} - Nubo Demo`}>
      {region && location && provider ? (
        <div className="max-w-6xl m-auto px-10 mt-16 lg:pl-20">
          <Map currentRegionId={region.id} setRegion={() => {}} />
        </div>
      ) : (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Missing region
        </div>
      )}
    </BasicLayout>
  );
};

export default HomePage;
