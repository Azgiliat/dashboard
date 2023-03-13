import { RouteRecordRaw } from 'vue-router';

import Login from '@/components/Login.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
];

export default routes;
