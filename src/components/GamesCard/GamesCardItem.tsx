/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useAppStore } from '../../../store/store';

import { Games } from '../../../types';
import {
  Buttons,
  CardItemTitle,
  CartItemWrapper,
  Counter,
  Cross,
  Input,
  MainWrapper
} from '../../styles';

const GamesCardItem = ({ game, showModal }: Games) => {
  const posterLink = `http://${game.fields.poster?.fields.file.url}`;

  const { cart, updateQuantity, removeFromCart } = useAppStore();

  const [totalQuantity, setTotalQuantity] = useState<number | undefined>(1);

  const result = cart?.reduce((acc, item) => acc + item.fields.price! * item.quantity!, 0);

  useEffect(() => {
    setTotalQuantity(game.quantity);
  });

  return (
    <MainWrapper>
      <Cross>
        <Image
          onClick={() => removeFromCart(game.fields.name)}
          src="/remove.svg"
          width={24}
          height={24}
          alt="cross"
        />
      </Cross>
      <CartItemWrapper>
        <Image src={posterLink} width={270} height={400} alt="poster" />

        <div>
          <CardItemTitle>{game.fields.name}</CardItemTitle>
          <p>{result} UAH</p>
          <Counter>
            <Buttons onClick={() => updateQuantity(game.fields.name, 'decrease')}>-</Buttons>
            <Input type="text" value={totalQuantity} />
            <Buttons onClick={() => updateQuantity(game.fields.name, 'increase')}>+</Buttons>
          </Counter>
        </div>
        <button onClick={() => showModal(true)}>Buy</button>
      </CartItemWrapper>
    </MainWrapper>
  );
};

export default GamesCardItem;
