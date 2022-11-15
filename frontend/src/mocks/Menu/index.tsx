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
        hasBorder: true,
        color: ''
      },
      {
        icon: Person,
        link: '/aboutMe',
        title: 'Sobre Mim',
        hasBorder: false,
        color: '#FFB74D'
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Depoimentos',
        hasBorder: false,
        color: '#8BC24A'
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Galeria',
        hasBorder: true,
        color: '#1E88E5'
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contato',
        hasBorder: true,
        color: '#FF7043'
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
        hasBorder: true,
        color: ''
      },
      {
        icon: Person,
        link: '/aboutMe',
        title: 'About Me',
        hasBorder: false,
        color: '#FFB74D'
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Testimonies',
        hasBorder: false,
        color: '#8BC24A'
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Gallery',
        hasBorder: true,
        color: '#1E88E5'
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contact',
        hasBorder: true,
        color: '#FF7043'
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
        hasBorder: true,
        color: ''
      },
      {
        icon: Person,
        link: '/aboutMe',
        title: 'Su di me',
        hasBorder: false,
        color: '#FFB74D'
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Deposizioni',
        hasBorder: false,
        color: '#8BC24A'
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Galleria',
        hasBorder: true,
        color: '#1E88E5'
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contatto',
        hasBorder: true,
        color: '#FF7043'
      },
    ]
  },
];