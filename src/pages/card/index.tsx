/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { IGames } from '../../../contentful';
import { useAppStore } from '../../../store/store';
import GamesCardItem from '../../components/GamesCard/GamesCardItem';
import { GameItem } from '../../styles/Games';

const ProductCard = () => {
  const { cart } = useAppStore();
  const [cartItems, setCartItems] = useState<IGames[]>();

  useEffect(() => {
    setCartItems(cart);
  });

  return (
    <GameItem>
      {cartItems && cartItems.map((item) => <GamesCardItem key={item.fields.name} game={item} />)}
    </GameItem>
  );
};

export default ProductCard;
