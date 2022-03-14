import axios from 'axios';
import { GetServerSideProps } from 'next';
import { HomePage } from '../components/pages';
import { getGeo } from '../lib/geo';
import { getIpFromRequest } from '../lib/ip';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ip = getIpFromRequest(req);

  try {
    if (ip) {
      const geo = getGeo(ip);

      if (geo) {
        console.log({ ...geo, ip });
        await axios.post(
          'https://api.nubo.app/lists/requests',
          {
            data: {
              country: geo.country,
              city: geo.city || geo.country,
            },
          },
          {
            headers: {
              'x-api-key': process.env.NUBO_API_KEY || '',
            },
          }
        );
      }
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
};

export default HomePage;
