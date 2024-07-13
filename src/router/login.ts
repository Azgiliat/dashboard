import type { RouteRecordRaw } from 'vue-router';

import Login from '@/components/Login.vue';
import { Layout } from '@/layouts/layouts';

export enum LoginRouteName {
  LOGIN = 'login',
}

const routes: RouteRecordRaw[] = [
  {
    name: LoginRouteName.LOGIN,
    path: '/login',
    meta: {
      layout: Layout.NoLayout,
    },
    component: Login,
  },
];

export default routes;
