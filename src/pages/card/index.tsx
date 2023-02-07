/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';

import { IGames } from '../../../contentful';
import { useAppStore } from '../../../store/store';
import GamesCardItem from '../../components/GamesCard/GamesCardItem';

import { GamesContent } from '../../styles/Games';

const ProductCard = () => {
  const { cart } = useAppStore();
  const [cartItems, setCartItems] = useState<IGames[]>();

  useEffect(() => {
    setCartItems(cart);
  });

  return (
    <GamesContent>
      {cartItems && cartItems.map((item) => <GamesCardItem key={item.fields.name} game={item} />)}
    </GamesContent>
  );
};

export default ProductCard;
