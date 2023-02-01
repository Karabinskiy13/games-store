import Link from 'next/link';
import React from 'react';
import { Games } from '../../../types';
import { GameItem } from '../../styles/Games';

const Game = ({ game }: Games) => {
  const posterLink = `http://${game.fields.poster?.fields.file.url}`;
  const showDescription = `/games/${game.fields.name}`;

  return (
    <GameItem>
      <img className="poster" src={posterLink} width={270} height={400} alt="poster" />
      <div className="name">{game.fields.name}</div>
      <div>{game.fields.price}</div>
      <div>{game.fields.releaseDate}</div>
      <Link href={showDescription}>
        <button className="button">{game.fields.showFull}</button>
      </Link>
    </GameItem>
  );
};

export default Game;
