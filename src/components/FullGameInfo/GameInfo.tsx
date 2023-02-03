import Link from 'next/link';
import React from 'react';
import { Games } from '../../../types';

const GameInfo = ({ game }: Games) => {
  const backDropPathLink = game.fields.backdrop?.fields.file.url;
  console.log(backDropPathLink);
  return (
    <div style={{ backgroundImage: backDropPathLink }}>
      <Link href="/">
        <button className="buttonPage">Home</button>
      </Link>
      <div className="titlePage">{game.fields.name}</div>
      <div className="descriptionPage">{game.fields.showMore}</div>
    </div>
  );
};

export default GameInfo;
