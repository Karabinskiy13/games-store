import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

import client from '../../../../cms';
import { IGames, IGamesFields } from '../../../../contentful';
import { useAppStore } from '../../../../store/store';

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
    <div
      style={{
        backgroundImage: `url(${backDropPathLink})`,
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat'
      }}
      className="info">
      <Link href="/">
        <button className="buttonPage">Home</button>
      </Link>
      <div className="titlePage">{gamesInfo.fields.name}</div>
      <div className="descriptionPage">{gamesInfo.fields.fullDescription}</div>
      <button onClick={() => addToCart(gamesInfo)}>add to ProductCard</button>
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
