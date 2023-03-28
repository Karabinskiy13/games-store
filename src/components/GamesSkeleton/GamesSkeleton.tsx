import React from 'react';
import { GamesSkeletonStyle } from '../../styles/GameSkeleton';

const GamesSkeleton = () => {
  return (
    <div>
      <GamesSkeletonStyle></GamesSkeletonStyle>
      <GamesSkeletonStyle></GamesSkeletonStyle>
      <GamesSkeletonStyle></GamesSkeletonStyle>
    </div>
  );
};

export default GamesSkeleton;
