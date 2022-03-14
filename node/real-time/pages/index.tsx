import { GetServerSideProps } from 'next';
import { HomePage } from '../components/pages';
import { getGeo } from '../lib/geo';
import { getIpFromRequest } from '../lib/ip';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ip = getIpFromRequest(req);

  try {
    if (ip) {
      const geo = getGeo(ip);

      console.log(geo);
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
};

export default HomePage;
