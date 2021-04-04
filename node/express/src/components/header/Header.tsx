import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Logo from './logo/Logo';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-30 w-full m-auto flex items-center p-4 md:px-6 md:py:4 xl:p-8 border-gray-100 border-b">
      <Logo />

      <motion.a
        className="text-xs font-semibold uppercase bg-gray-700 text-white rounded-full ml-auto hover:bg-blue transition cursor-pointer select-none whitespace-nowrap px-4 py-2 md:px-8 md:py-3"
        href="https://nubo.app"
        rel="noopener nofollow"
        whileTap={{ scale: 0.98 }}
      >
        Learn more
      </motion.a>
    </div>
  );
};

export default Header;
