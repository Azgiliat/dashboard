import { PROFILE_ROUTE_NAME, routes } from './routes';
import { AppModule, AppModuleName } from '@/dto/modules';

export default {
  routes,
  storeModule: {
    name: AppModuleName.PROFILE,
    icon: 'calendar',
    rootRoute: PROFILE_ROUTE_NAME.ROOT,
    isCore: true,
  },
} as AppModule;
