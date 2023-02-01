import { GetStaticProps } from 'next';
import React from 'react';
import client from '../../cms';
import { IGames, IGamesFields } from '../../contentful';
import Game from '../components/Game/Game';
import { GamesContent } from '../styles/Games';

export default function Home({ games }: { games: IGames[] }) {
  console.log(games);
  return (
    <div>
      <GamesContent>
        {games.map((game) => (
          <Game key={game.fields.name} game={game} />
        ))}
      </GamesContent>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const games = await client.getEntries<IGamesFields>({
    content_type: 'games'
  });

  const gamesItems = games.items;

  return {
    props: {
      games: gamesItems
    }
  };
};
