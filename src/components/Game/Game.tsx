import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Games } from '../../../types';
import { Button, GameItem } from '../../styles';

const Game = ({ game, showModal }: Games) => {
  const posterLink = `http://${game.fields.poster?.fields.file.url}`;
  const showDescription = `/games/${game.fields.name}`;

  return (
    <GameItem>
      <Image
        className="poster"
        src={posterLink}
        width={270}
        height={400}
        alt="poster"
        data-testId="poster"
        onClick={() => showModal(true)}
      />
      <div className="name">{game.fields.name}</div>
      <div data-testId="price">{game.fields.price}UAH</div>
      <div data-testId="releaseDate">Release Date: {game.fields.releaseDate}</div>
      <Link href={showDescription}>
        <Button data-testId="button" className="button">
          {game.fields.showFull}
        </Button>
      </Link>
    </GameItem>
  );
};

export default Game;
