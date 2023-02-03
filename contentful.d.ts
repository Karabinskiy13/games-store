import { Asset, Entry } from 'contentful';

export interface IGamesFields {
  id?: number | undefined;
  quantity?: number;
  name?: string | undefined;
  description?: string | undefined;
  price?: number;
  poster?: Asset | undefined;
  showMore?: string | undefined;
  fullDescription?: string | undefined;
  releaseDate?: string | undefined;
  platform?: string | undefined;
  showFull?: string | undefined;
  backdrop?: Asset | undefined;
}

export interface IGames extends Entry<IGamesFields> {
  id?: number;
  prevState?: null;
  quantity?: number;
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'games';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'books' | 'games' | 'main';

export type IEntry = IBooks | IGames | IMain;

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
