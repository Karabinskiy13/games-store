import { GetStaticProps } from 'next';
import React from 'react';
import client from '../../../cms';
import { IGames, IGamesFields } from '../../../contentful';
import Game from '../../components/Game/Game';
import { GamesContent } from '../../styles/Games';

const Thriller = ({ games }: { games: IGames[] }) => {
  const isSingleItem = games.length > 1;
  return (
    <GamesContent>
      {isSingleItem ? (
        games.map((game) => <Game key={game.fields.name} game={game} showModal={() => false} />)
      ) : (
        <Game key={games.fields.name} game={games} showModal={() => false} />
      )}
    </GamesContent>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const games = await client.getEntries<IGamesFields>({
    content_type: 'games'
  });

  const gamesItems = games.items;
  const result = gamesItems.find((games) => {
    return games.fields.genres === 'Thriller';
  });

  return {
    props: {
      games: result
    }
  };
};

export default Thriller;
