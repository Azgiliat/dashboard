import { RouteRecordRaw } from 'vue-router';

export const PAINT_ROUTE_NAME = {
  ROOT: 'paint',
} as const;

export const routes: RouteRecordRaw[] = [
  {
    name: PAINT_ROUTE_NAME.ROOT,
    path: '/paint',
    component: () => import('@/modules/paint/CanvasPage.vue'),
  },
];
