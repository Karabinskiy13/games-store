// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IGamesFields {
  /** Name */
  name?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Price */
  price?: string | undefined;

  /** Poster */
  poster?: Asset | undefined;

  /** Show More */
  showMore?: string | undefined;

  /** Full Description */
  fullDescription?: string | undefined;

  /** Release Date */
  releaseDate?: string | undefined;

  /** Platform */
  platform?: string | undefined;
  showFull?: string | undefined;
}

export interface IGames extends Entry<IGamesFields> {
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

export interface IMainFields {
  /** title */
  title?: string | undefined;

  /** description */
  description?: Document | undefined;

  /** background */
  background?: Asset | undefined;

  /** Footer */
  footer?: string | undefined;
}

export interface IMain extends Entry<IMainFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'main';
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