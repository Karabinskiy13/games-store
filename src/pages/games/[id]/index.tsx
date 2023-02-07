import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import client from '../../../../cms';
import { IGames, IGamesFields } from '../../../../contentful';
import { useAppStore } from '../../../../store/store';

import { Button } from '../../../styles/Games';
import {
  Description,
  Platform,
  Price,
  PriceButton,
  Title,
  Wrapper
} from '../../../styles/GameFull';

type Games = {
  gamesInfo: IGames;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const GamesInfo = ({ gamesInfo }: Games) => {
  const backDropPathLink = `http://${gamesInfo.fields.backdrop?.fields.file.url}`;
  const { addToCart } = useAppStore();
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${backDropPathLink})`
      }}>
      <Title>{gamesInfo.fields.name}</Title>
      <Description>{gamesInfo.fields.fullDescription}</Description>
      <Platform>Aviable in {gamesInfo.fields.platform}</Platform>
      <PriceButton>
        <Price>{gamesInfo.fields.price} UAH</Price>
        <Button onClick={() => addToCart(gamesInfo)}>ADD TO CART</Button>
      </PriceButton>
    </Wrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await client.getEntries<IGamesFields>({
    content_type: 'games'
  });

  return {
    paths: books.items.map((game) => {
      return {
        params: {
          id: game.fields.name
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const game = await client.getEntries<IGamesFields>({
    content_type: 'games',
    'fields.name': id,
    limit: 1
  });

  const [gamesInfo] = game.items;

  return {
    props: {
      gamesInfo
    }
  };
};

export default GamesInfo;
