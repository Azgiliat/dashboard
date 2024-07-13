import { Layout } from '@/layouts/layouts';
import type { RouteRecordRaw } from 'vue-router';

export const PROFILE_ROUTE_NAME = {
  ROOT: 'profile',
};

export const routes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: PROFILE_ROUTE_NAME.ROOT,
    meta: {
      layout: Layout.LeftAside,
    },
    component: () => import('@/modules/profile/components/UserProfile.vue'),
  },
];
