import { AppModule, AppModuleName } from '@/dto/modules';

import { PROFILE_ROUTE_NAME, routes } from './routes';

export default {
  routes,
  storeModule: {
    name: AppModuleName.PROFILE,
    icon: 'profile',
    rootRoute: PROFILE_ROUTE_NAME.ROOT,
    isCore: true,
  },
} as AppModule;
