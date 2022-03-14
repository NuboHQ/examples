import { motion } from 'framer-motion';
import nubo from 'nubo';
import React, { useCallback, useEffect, useState } from 'react';
import { formatDate } from '../../../lib/date';
import Fade from '../../fade/Fade';
import { Logo } from '../../Logo';

const HomePage = () => {
  const [requests, setRequests] = useState([
    {
      id: '1',
      location: 'United Kingdom',
      locationId: 'GB',
      date: new Date().getTime(),
    },
    {
      id: '2',
      location: 'Netherlands',
      locationId: 'NL',
      date: new Date().getTime(),
    },
    {
      id: '3',
      location: 'United States',
      locationId: 'US',
      date: new Date().getTime(),
    },
    {
      id: '4',
      location: 'Germany',
      locationId: 'DE',
      date: new Date().getTime(),
    },
  ]);

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
    hidden: { opacity: 0, scale: 0.5, height: 0 },
    show: { opacity: 1, scale: 1, height: 120 },
  };

  const updateRequests = useCallback(() => {
    setRequests([
      {
        id: String(requests.length + 1),
        location: 'United States',
        locationId: 'US',
        date: new Date().getTime(),
      },
      ...requests,
    ]);
  }, [requests]);

  useEffect(() => {
    // setTimeout(updateRequests, 2000);
  }, [updateRequests]);

  useEffect(() => {
    const subscription = nubo.lists.subscribe<any>({
      list: 'users',
      apiKey: 'apik-xxxxx',
      options: {
        filter: { age: { $gt: 20 } },
        orderBy: {
          name: 'asc',
        },
        page: 1,
        pageSize: 25,
      },
      onUpdate: ({ items }) => {
        console.log(items);
      },
    });

    return () => {
      subscription.close();
    };
  }, []);

  return (
    <div className="pb-32">
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
                    src={`/assets/flags/${request.locationId}.svg`}
                    alt={request.location}
                  />
                </div>

                <div className="pt-4 text-lg md:text-xl md:pt-0">
                  {request.location}
                </div>
              </div>

              <div className="pt-4 ml-auto md:pt-0">
                {formatDate(request.date)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
