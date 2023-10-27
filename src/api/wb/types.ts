export interface LoginResponseInterface {
  refresh: string;
  access: string;
  is_email_confirmed: boolean;
}

export interface LoginRequestInterface {
  email: string;
  password: string;
}

export interface BetItemInterface {
  advert_id: number;
  article: number;
  cpm: number;
  delivery_time: number;
  image: string;
  image_big: string;
  page: number;
  position: number;
  position_on_page: number;
  subject: { id: number; name: string };
  url: string;
}
export interface SubjectPrioritiesInterface {
  id: number;
  name: string;
  position: number;
}
export interface GetAdvertsResponceInterface {
  bets: Array<BetItemInterface>;
  subject_priorities: Array<SubjectPrioritiesInterface>;
}

export interface GetAdvertsRequestInterface {
  input: string;
  type: string;
  region_id: number;
}
