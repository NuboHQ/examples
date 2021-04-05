import { GetServerSideProps } from 'next';

export { HomePage as default } from '@/components/pages';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      regionId: process.env.NUBO_REGION,
      locationId: process.env.NUBO_LOCATION,
      providerId: process.env.NUBO_CLOUD_PROVIDER,
    },
  };
};
