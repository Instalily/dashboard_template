// MenuItems.js
import { HomeIcon, UserGroupIcon } from '@heroicons/react/20/solid';

export const menuItems = [
  {
    path: '/',
    label: 'Home',
    page_title: 'Insights Dashboard',
    icon: HomeIcon,
  },
  {
    path: '/prospects',
    label: 'Prospects',
    page_title: 'Prospects',
    icon: UserGroupIcon,
  },
];
