import axios from 'axios';
import { GetServerSideProps } from 'next';
import { HomePage } from '../components/pages';
import { getCountryFromRequest } from '../lib/country';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const country = getCountryFromRequest(req);

  try {
    if (country) {
      await axios.post(
        'https://api.nubo.app/lists/requests',
        {
          data: {
            country,
          },
        },
        {
          headers: {
            'x-api-key': process.env.NUBO_API_KEY || '',
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
};

export default HomePage;
