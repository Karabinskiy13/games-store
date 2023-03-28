import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import client from '../../cms';
import { IGames, IGamesFields } from '../../contentful';
import Game from '../components/Game/Game';

import { GamesContent } from '../styles/Games';
import ModalView from '../components/ModalView/ModalView';
import GamesSkeleton from '../components/GamesSkeleton/GamesSkeleton';

export default function Home({ games }: { games: IGames[] }) {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalImage, setModalImage] = useState<string | undefined>('');
  const [modalName, setModalName] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openModal = (url?: string, name?: string) => {
    setModalStatus(true);
    setModalImage(url);
    setModalName(name);
  };

  useEffect(() => {
    setIsLoading(true);
  });

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {games.map((game) => (
          <SwiperSlide key={game.fields.name}>
            <Game
              game={game}
              showModal={() =>
                openModal(`http://${game.fields.poster?.fields.file.url}`, game.fields.name)
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isLoading ? (
        <GamesContent>
          <GamesSkeleton />
        </GamesContent>
      ) : (
        <GamesContent>
          {games.map((game) => (
            <Game
              key={game.fields.name}
              game={game}
              showModal={() =>
                openModal(`http://${game.fields.poster?.fields.file.url}`, game.fields.name)
              }
            />
          ))}
        </GamesContent>
      )}

      <ModalView
        url={modalImage}
        show={modalStatus}
        name={modalName}
        hideModal={() => {
          setModalImage('');
          setModalStatus(false);
        }}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const games = await client.getEntries<IGamesFields>({
    content_type: 'games'
  });

  const gamesItems = games.items;

  return {
    props: {
      games: gamesItems
    }
  };
};
