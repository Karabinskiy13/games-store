import { GetStaticProps } from 'next';
import React from 'react';
import client from '../../../cms';
import { IGames, IGamesFields } from '../../../contentful';
import Game from '../../components/Game/Game';
import { GamesContent } from '../../styles/Games';

const Action = ({ games }: { games: IGames[] }) => {
  return (
    <GamesContent>
      {games.map((game) => (
        <Game key={game.fields.name} game={game} showModal={() => false} />
      ))}
    </GamesContent>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const games = await client.getEntries<IGamesFields>({
    content_type: 'games'
  });

  const gamesItems = games.items;
  const result = gamesItems.filter((games) => {
    return games.fields.genres === 'Action';
  });

  console.log(result);

  return {
    props: {
      games: result
    }
  };
};

export default Action;
