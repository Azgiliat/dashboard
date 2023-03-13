import { RouteRecordRaw } from 'vue-router';

import Login from '@/components/Login.vue';
import { Layout } from '@/layouts/layouts';

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    meta: {
      layout: Layout.LeftAside,
    },
    component: Login,
    children: [
      {
        path: 'asd',
        component: Login,
      },
    ],
  },
];

export default routes;
