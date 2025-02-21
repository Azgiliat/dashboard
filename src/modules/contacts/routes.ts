import type { RouteRecordRaw } from 'vue-router';

import { AppModuleName } from '@/dto/modules';
import { Layout } from '@/layouts/layouts';

export const CONTACTS_ROUTE_NAMES = {
  root: 'contacts',
};

export const routes: RouteRecordRaw[] = [
  {
    name: CONTACTS_ROUTE_NAMES.root,
    path: '/contacts',
    meta: {
      layout: Layout.LeftAside,
      moduleName: AppModuleName.CONTACTS,
    },
    component: () => import('./components/ContactsList.vue'),
  },
];
