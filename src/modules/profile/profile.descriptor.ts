import { PROFILE_ROUTE_NAME, routes } from './routes';

import type { FrontModuleDescription } from '@/dto/modules';

export default {
  routes,
  rootRoute: PROFILE_ROUTE_NAME.ROOT,
} as FrontModuleDescription;
