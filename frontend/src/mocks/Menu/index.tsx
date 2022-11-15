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
        color: 'var(--colorIconMenuAboutMe)'
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Depoimentos',
        hasBorder: false,
        color: 'var(--colorIconMenuTestimonies)'
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Galeria',
        hasBorder: true,
        color: 'var(--colorIconMenuCollections)'
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contato',
        hasBorder: true,
        color: 'var(--colorIconMenuContact)'
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
        color: 'var(--colorIconMenuAboutMe)'
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Testimonies',
        hasBorder: false,
        color: 'var(--colorIconMenuTestimonies)'
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Gallery',
        hasBorder: true,
        color: 'var(--colorIconMenuCollections)'
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contact',
        hasBorder: true,
        color: 'var(--colorIconMenuContact)'
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
        color: 'var(--colorIconMenuAboutMe)'
      },
      {
        icon: Chat,
        link: '/testimonies',
        title: 'Deposizioni',
        hasBorder: false,
        color: 'var(--colorIconMenuTestimonies)'
      },
      {
        icon: Collections,
        link: '/gallery',
        title: 'Galleria',
        hasBorder: true,
        color: 'var(--colorIconMenuCollections)'
      },
      {
        icon: Call,
        link: '/contact',
        title: 'Contatto',
        hasBorder: true,
        color: 'var(--colorIconMenuContact)'
      },
    ]
  },
];