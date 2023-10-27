import { LinkPropsInterface } from './components/Link/types';

export const leftNavList: Array<LinkPropsInterface> = [
  {
    title: 'Продавцы',
    href: '/',
    hasMenu: false,
  },
  {
    title: 'Мои кампании',
    href: '/',
    hasMenu: true,
  },
  {
    title: 'Актуальные ставки',
    href: '/',
    hasMenu: false,
  },
  {
    title: 'Возможности',
    href: '/',
    hasMenu: true,
  },
];

export const rightNavList: Array<LinkPropsInterface> = [
  {
    title: 'Поддержка',
    href: '/',
    hasMenu: false,
  },
  {
    title: 'Тарифы',
    href: '/',
    hasMenu: false,
  },
];
