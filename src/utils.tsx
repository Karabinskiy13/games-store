import { IGames } from '../contentful';
import { Games } from '../types';

export type PageProps = {
  games?: Games;
  gamesInfo?: IGames;
};

export type TitleNameProps = {
  pageProps: PageProps;
};

export const TitleName = ({ pageProps }: TitleNameProps) => {
  if (pageProps.games) {
    return 'GamesStore';
  }
  if (pageProps.gamesInfo) {
    return pageProps.gamesInfo.fields.name;
  }
};
