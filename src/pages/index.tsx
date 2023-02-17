import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import client from '../../cms';
import { IGames, IGamesFields } from '../../contentful';
import Game from '../components/Game/Game';

import { GamesContent } from '../styles/Games';
import ModalView from '../components/ModalView/ModalView';

export default function Home({ games }: { games: IGames[] }) {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalName, setModalName] = useState<string | undefined>('');

  const openModal = (name?: string) => {
    setModalStatus(true);
    setModalName(name);
  };
  return (
    <div>
      <GamesContent>
        {games.map((game) => (
          <Game key={game.fields.name} game={game} showModal={() => openModal(game.fields.name)} />
        ))}
      </GamesContent>
      <ModalView
        show={modalStatus}
        name={modalName}
        hideModal={() => {
          setModalName('');
          setModalStatus(false);
        }}
      />
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
