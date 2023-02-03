/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../../store/store';
import { Games } from '../../../types';
import { Buttons, Counter, Input } from '../../styles/GamesCardItem';

const GamesCardItem = ({ game }: Games) => {
  const posterLink = `http://${game.fields.poster?.fields.file.url}`;

  const { cart, updateQuantity, removeFromCart } = useAppStore();

  const [totalQuantity, setTotalQuantity] = useState<number | undefined>(1);

  const result = cart.reduce((acc, item) => acc + item.fields.price! * item.quantity!, 0);

  useEffect(() => {
    setTotalQuantity(game.quantity);
  });

  return (
    <div className="rounded-md bg-[#22252D] flex my-5 relative">
      <button type="button" onClick={() => removeFromCart(game.fields.name)}></button>
      <div className="w-20 relative">
        <img src={posterLink} />
      </div>
      <div>
        <h3>{game.fields.name}</h3>
        <p>{result}</p>
        <div>
          <Counter>
            <Buttons onClick={() => updateQuantity(game.fields.name, 'decrease')}>-</Buttons>
            <Input type="text" value={totalQuantity} />
            <Buttons onClick={() => updateQuantity(game.fields.name, 'increase')}>+</Buttons>
          </Counter>
        </div>
      </div>
    </div>
  );
};

export default GamesCardItem;
