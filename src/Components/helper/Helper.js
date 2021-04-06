import React from 'react';
import {
  AttachMoneyOutlined,
  Event,
  ListAlt,
  Notes,
  Settings,
  Delete,
  Edit,
  Print
} from '@material-ui/icons';

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

export const ModalNav = [
  {
    name: 'Edit',
    icon: <Edit />,
    path: '/user/notes/edit'
  },
  {
    name: 'Delete',
    icon: <Delete />,
    path: '/user/notes/delete'
  },
  {
    name: 'Print',
    icon: <Print />,
    path: '/user/notes/print'
  },
]