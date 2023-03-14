import { RouteRecordRaw } from 'vue-router';

import Login from '@/components/Login.vue';
import { Layout } from '@/layouts/layouts';
import { RouteName } from '@/router/t';

const routes: RouteRecordRaw[] = [
  {
    name: RouteName.LOGIN,
    path: '/login',
    meta: {
      layout: Layout.NoLayout,
    },
    component: Login,
  },
];

export default routes;
