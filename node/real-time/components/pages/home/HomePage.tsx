import { motion } from 'framer-motion';
import Head from 'next/head';
import nubo from 'nubo';
import React, { useEffect, useState } from 'react';
import { formatDate } from '../../../lib/date';
import { Request } from '../../../lib/requests/types';
import Fade from '../../fade/Fade';
import { Logo } from '../../Logo';

const HomePage = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    const subscription = nubo.lists.subscribe<any>({
      list: 'requests',
      options: {
        orderBy: {
          created: 'desc',
        },
        page: 1,
        pageSize: 25,
      },
      onUpdate: ({ items: requests }) => {
        setRequests(requests);
      },
    });

    return () => {
      subscription.close();
    };
  }, []);

  return (
    <div className="pb-32">
      <Head>
        <title>Nubo - Real-Time</title>
      </Head>

      <Fade />

      <Logo />

      <div className="w-full m-auto mt-44 md:mt-56 max-w-4xl">
        <motion.div
          className="px-20 grid gap-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* <div className="divide-y divide-solid px-20 divide-gray-100"> */}
          {requests.map((request) => (
            <motion.div
              key={request.id}
              className="md:flex md:items-center w-full py-12 border border-gray-200 rounded-md px-8"
              variants={item}
            >
              <div className="md:flex md:items-center md:gap-10">
                <div className="rounded-sm overflow-hidden h-6">
                  <img
                    className="block h-full"
                    src={`/assets/flags/${request.country}.svg`}
                    alt={request.country}
                  />
                </div>

                <div className="pt-4 text-lg md:text-xl md:pt-0">
                  {request.country || 'Unknown'}
                </div>
              </div>

              <div className="pt-4 ml-auto md:pt-0">
                {formatDate(request.created)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
