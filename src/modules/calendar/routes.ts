import { RouteRecordRaw } from 'vue-router';

import { Layout } from '@/layouts/layouts';

export enum CalendarRouteName {
  CALENDAR = 'calendar',
}

const routes: RouteRecordRaw[] = [
  {
    name: CalendarRouteName.CALENDAR,
    path: '/calendar',
    meta: {
      layout: Layout.LeftAside,
    },
    component: () => import('./components/Calendar.vue'),
  },
];

export default routes;
