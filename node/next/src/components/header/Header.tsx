import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Logo from './logo/Logo';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className="bg-white w-full m-auto flex items-center p-4 md:px-6 md:py:4 xl:p-8">
      <Logo />
    </div>
  );
};

export default Header;
