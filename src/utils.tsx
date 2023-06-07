import { useEffect, useState } from 'react';
import { IGames } from '../contentful';
import { Games } from '../types';
import debounce from 'lodash.debounce';

export type PageProps = {
  games?: Games;
  gamesInfo?: IGames;
};

export type TitleNameProps = {
  pageProps: PageProps;
};

export const TitleName = ({ pageProps }: TitleNameProps) => {
  if (pageProps?.games) {
    return 'GamesStore';
  } else if (pageProps?.gamesInfo) {
    return pageProps.gamesInfo.fields.name;
  }
};

export default function getWindowInnerWidth() {
  return window.innerWidth;
}

export enum ResolutionTypes {
  DESKTOP = 1439,
  TABLET = 1279,
  TABLET_SMALL = 1023,
  MOBILE = 639,
  MOBILE_SMALL = 479,
  MOBILE_SMALLEST = 320
}

export const Breakpoints = {
  mobileSmall: {
    name: 'Mobile Small',
    styles: {
      width: '479px',
      height: '600px'
    }
  },
  tabletSmall: {
    name: 'Tablet Small',
    styles: {
      width: '1023px',
      height: '900px'
    }
  }
};

export const useViewportDetect = (defaultViewport = 0) => {
  const [windowWidth, setWindowWidth] = useState(defaultViewport);

  useEffect(() => {
    setWindowWidth(getWindowInnerWidth());

    const handleWindowResize = debounce(() => {
      setWindowWidth(getWindowInnerWidth());
    }, 100);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    windowWidth,
    isMobileSmall: ResolutionTypes.MOBILE_SMALL >= windowWidth,
    isTabletSmall: ResolutionTypes.TABLET_SMALL >= windowWidth,
    isDesktop: ResolutionTypes.DESKTOP >= windowWidth
  };
};
