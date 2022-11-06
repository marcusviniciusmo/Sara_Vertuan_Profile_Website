import { MenuProps } from "types/Menu";
import { Home, Person, Chat, Collections, Call } from '@mui/icons-material';

export const MockedData: MenuProps[] = [
  {
    language: 'PT',
    routes: [
      {
        icon: Home,
        link: '/',
        title: 'Início',
        hasBorder: true
      },
      {
        icon: Person,
        link: '/aboutMe',
        title: 'Sobre Mim',
        hasBorder: false
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Depoimentos',
        hasBorder: false
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Galeria',
        hasBorder: true
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contato',
        hasBorder: true
      },
    ]
  },
  {
    language: 'EN',
    routes: [
      {
        icon: Home,
        link: '/',
        title: 'Home',
        hasBorder: true
      },
      {
        icon: Person,
        link: '/aboutMe',
        title: 'About Me',
        hasBorder: false
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Testimonies',
        hasBorder: false
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Gallery',
        hasBorder: true
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contact',
        hasBorder: true
      },
    ]
  },
  {
    language: 'IT',
    routes: [
      {
        icon: Home,
        link: '/',
        title: 'Inizio',
        hasBorder: true
      },
      {
        icon: Person,
        link: '/aboutMe',
        title: 'Su di me',
        hasBorder: false
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Deposizioni',
        hasBorder: false
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Galleria',
        hasBorder: true
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contatto',
        hasBorder: true
      },
    ]
  },
];