import React from 'react';
import { AttachMoneyOutlined, Event, ListAlt, Notes, Settings } from '@material-ui/icons';

export const Navs = [
  {
    name: 'Notes',
    path: '/user/notes',
    icon: <Notes />,
  },
  {
    name: 'Todos',
    path: '/user/todos',
    icon: <ListAlt />,
  },
  {
    name: 'Events',
    path: '/user/events',
    icon: <Event />,
  },
  {
    name: 'Budget',
    path: '/user/budgets',
    icon: <AttachMoneyOutlined />,
  },
  {
    name: 'Settings',
    path: '/user/settings',
    icon: <Settings />,
  },
]