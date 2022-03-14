import { GetServerSideProps } from 'next';
import { HomePage } from '../components/pages';
import { getGeo } from '../lib/geo';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log('ip:', req.socket.remoteAddress);

  try {
    const geo = getGeo(req.socket.remoteAddress || '');

    console.log('geo: ', geo);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
};

export default HomePage;
