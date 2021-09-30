import { GetServerSideProps } from 'next';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export { HomePage as default } from '@/components/pages';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      appNameId: publicRuntimeConfig.appNameId,
      regionId: publicRuntimeConfig.region,
      locationId: publicRuntimeConfig.location,
      providerId: publicRuntimeConfig.provider,
    },
  };
};
