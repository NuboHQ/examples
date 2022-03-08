import type { NextPage } from 'next';
import Head from 'next/head';
import nubo from 'nubo';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    console.log(process.env);
    const subscription = nubo.lists.subscribe<any>({
      list: 'users',
      options: {
        filter: { age: { $gt: 20 } },
        orderBy: {
          name: 'asc',
        },
        page: 1,
        pageSize: 25,
      },
      onUpdate: ({ items }) => {
        setItems(items);
      },
    });

    return () => {
      subscription.close();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
