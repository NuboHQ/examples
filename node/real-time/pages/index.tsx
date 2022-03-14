import { GetServerSideProps } from 'next';
import { HomePage } from '../components/pages';
import { getGeo } from '../lib/geo';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log(req.headers);
  const ip =
    (req.headers['x-real-ip'] as string) ||
    (req.connection.remoteAddress as string);

  console.log('ip:', ip);
  console.log('connection:', req.connection.remoteAddress);

  try {
    const geo = getGeo(ip);

    console.log('geo: ', geo);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
};

export default HomePage;
