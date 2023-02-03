import React, { useEffect, useState } from 'react';
import { IGames } from '../../../contentful';
import { useAppStore } from '../../../store/store';
import Game from '../../components/Game/Game';
import { GameItem } from '../../styles/Games';

const ProductCard = () => {
  const { cart, showCart, toggleCart } = useAppStore();
  const [cartItems, setCartItems] = useState<IGames[]>();
  useEffect(() => setCartItems(cart));
  console.log(cart);
  return (
    <GameItem>
      {cartItems && cartItems.map((item) => <Game key={item.fields.name} game={item} />)}
    </GameItem>
  );
};

export default ProductCard;
