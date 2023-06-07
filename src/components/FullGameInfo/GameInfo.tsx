import React from 'react';
import Link from 'next/link';

import { Games } from '../../../types';
import { useViewportDetect } from '../../utils';

const GameInfo = ({ game }: Games) => {
  const backDropPathLink = game.fields.backdrop?.fields.file.url;
  const { isMobileSmall } = useViewportDetect();
  console.log(isMobileSmall);
  return (
    <div>
      {!isMobileSmall ? (
        <div style={{ backgroundImage: backDropPathLink }}>
          <Link href="/">
            <button className="buttonPage">Home</button>
          </Link>
          <div className="titlePage">{game.fields.name}</div>
          <div className="descriptionPage">{game.fields.showMore}</div>
        </div>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default GameInfo;
