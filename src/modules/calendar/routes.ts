import { RouteRecordRaw } from 'vue-router';

import { useIsModuleRouteAvailable } from '@/composables/useIsModuleRouteAvailable';
import { AppModuleName } from '@/dto/modules';
import { Layout } from '@/layouts/layouts';

export const CALENDAR_ROUTE_NAMES = {
  ROOT: 'calendar',
} as const;

const routes: RouteRecordRaw[] = [
  {
    name: CALENDAR_ROUTE_NAMES.ROOT,
    path: '/calendar',
    meta: {
      layout: Layout.LeftAside,
      moduleName: AppModuleName.CALENDAR,
    },
    component: () => import('./components/DshCalendar.vue'),
    beforeEnter() {
      return useIsModuleRouteAvailable(AppModuleName.CALENDAR);
    },
    children: [
      {
        path: 'asd',
        component: () => import('./components/DshCalendarChild.vue'),
        beforeEnter(to) {
          console.log('beforeEnter child');
          return true;
        },
      },
    ],
  },
];

export default routes;
