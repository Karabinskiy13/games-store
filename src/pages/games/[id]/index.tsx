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
import Comments from '../../../components/Comments/Comments';
import { useViewportDetect } from '../../../utils';
import Image from 'next/image';

type Games = {
  gamesInfo: IGames;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const GamesInfo = ({ gamesInfo }: Games) => {
  const backDropPathLink = `http://${gamesInfo.fields.backdrop?.fields.file.url}`;
  const { addToCart } = useAppStore();
  const { isMobileSmall } = useViewportDetect();
  return (
    <div>
      {!isMobileSmall ? (
        <Wrapper
          data-testId="wrapper"
          style={{
            backgroundImage: `url(${backDropPathLink})`
          }}>
          <Title>{gamesInfo.fields.name}</Title>
          <Description>{gamesInfo.fields.fullDescription}</Description>
          <Platform>Aviable in {gamesInfo.fields.platform}</Platform>
          <PriceButton>
            <Price data-testId="price">{gamesInfo.fields.price} UAH</Price>
            <Button onClick={() => addToCart(gamesInfo)}>ADD TO CART</Button>
          </PriceButton>
          <Comments currentPage={`${gamesInfo.fields.name}`} />
        </Wrapper>
      ) : (
        <div>
          <Image
            style={{ width: '100%' }}
            src={backDropPathLink}
            alt={'poster'}
            width={300}
            height={300}
          />
          <Title>{gamesInfo.fields.name}</Title>
          <Description>{gamesInfo.fields.fullDescription}</Description>
          <Platform>Aviable in {gamesInfo.fields.platform}</Platform>
          <PriceButton>
            <Price>{gamesInfo.fields.price} UAH</Price>
            <Button onClick={() => addToCart(gamesInfo)}>ADD TO CART</Button>
          </PriceButton>
          <Comments currentPage={`${gamesInfo.fields.name}`} />
        </div>
      )}
    </div>
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
