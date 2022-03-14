import axios from 'axios';
import { GetServerSideProps } from 'next';
import { HomePage } from '../components/pages';
import { getGeo } from '../lib/geo';
import { getIpFromRequest } from '../lib/ip';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ip = getIpFromRequest(req);

  try {
    if (ip) {
      // console.log({ ip, headers: req.headers });
      const geo = getGeo(ip);
      console.log({ geo });

      if (geo) {
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
