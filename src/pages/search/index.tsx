import React, { useEffect, useMemo, useState } from 'react';
import { GetStaticProps } from 'next';
import debounce from 'lodash.debounce';

import client from '../../../cms';
import { IGames, IGamesFields } from '../../../contentful';
import Game from '../../components/Game/Game';

import { SearchStyle } from '../../styles/Search';
import { GamesContent } from '../../styles/Games';

const Search = ({ games }: { games: IGames[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  const filtredGames = games.filter((game) => {
    return game?.fields?.name?.toLowerCase().includes(searchTerm.toLowerCase());
  });
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <div>
      <SearchStyle type="text" placeholder="Search" onChange={debouncedResults} />
      <GamesContent>
        {filtredGames && filtredGames.map((game) => <Game key={game.fields.name} game={game} />)}
      </GamesContent>
    </div>
  );
};

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

export default Search;
