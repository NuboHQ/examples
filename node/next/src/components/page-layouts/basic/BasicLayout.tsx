import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/header/Header';

interface Props {
  pageId?: string;
  title: string;
}

const BasicLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{title}</title>
      </Head>

      <Header />

      <div className="pt-20 md:pt-24 xl:pt-32">{children}</div>

      {/* <Footer /> */}
    </>
  );
};

export default BasicLayout;
