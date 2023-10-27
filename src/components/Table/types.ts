import { BetItemInterface } from '@/src/api/wb/types';

export interface TablePropsInterface {
  data: Array<BetItemInterface>;
}

export interface Endpoints {
  '1440': string;
  '1024': string;
  '768': string;
  '425': string;
  '375': string;
  '320': string;
}

export interface AdaptiveDataInterface {
  position: Endpoints;
  image: Endpoints;
  article: Endpoints;
  position_on_page: Endpoints;
  cpm: Endpoints;
  subjectName: Endpoints;
  delivery_time: Endpoints;
}

export type IdTypes =
  | 'position'
  | 'image'
  | 'article'
  | 'position_on_page'
  | 'cpm'
  | 'subjectName'
  | 'delivery_time';
