import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
import { RiAccountBoxFill } from 'react-icons/ri';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/products',
    text: 'products',
  },
  {
    id: 3,
    url: '/about',
    text: 'about',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: '/cart',
    icon: <ImCart />,
  },
  {
    id: 2,
    url: '/login',
    icon: <RiAccountBoxFill />,
  }
];
