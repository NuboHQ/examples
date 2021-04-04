import { GetServerSideProps } from 'next';

export { HomePage as default } from '@/components/pages';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { defaultRegionId: process.env.NUBO_REGION || 'europe-west' },
  };
};
