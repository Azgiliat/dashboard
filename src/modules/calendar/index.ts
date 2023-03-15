import { Module } from '@/modules/module-registrator';

import routes from './routes';

export default {
  name: 'Calendar',
  routes,
  icon: 'Calendar',
} as Module;
