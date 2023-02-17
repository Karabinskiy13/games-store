import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Games } from '../../../types';
import { Button, GameItem } from '../../styles/Games';

const Game = ({ game, showModal }: Games) => {
  const posterLink = `http://${game.fields.poster?.fields.file.url}`;
  const showDescription = `/games/${game.fields.name}`;

  return (
    <GameItem>
      <Link href={showDescription}>
        <Image
          className="poster"
          src={posterLink}
          width={270}
          height={400}
          alt="poster"
          onClick={() => showModal(true)}
        />
      </Link>
      <div className="name">{game.fields.name}</div>
      <div>{game.fields.price}UAH</div>
      <div>Release Date: {game.fields.releaseDate}</div>
      <Link href={showDescription}>
        <Button className="button">{game.fields.showFull}</Button>
      </Link>
    </GameItem>
  );
};

export default Game;
