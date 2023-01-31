import { GetStaticProps } from 'next';
import React from 'react';
import client from '../../cms';

export default function Home({ title, games }: { title: string; games: any }) {
  console.log(games);
  return (
    <div>
      <div>{title}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const games = await client.getEntries({
    content_type: 'games'
  });

  const gamesItems = games.items;

  return {
    props: {
      title: 'Welcome',
      games: gamesItems
    }
  };
};
