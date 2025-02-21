import { CONTACTS_ROUTE_NAMES, routes } from './routes';

import type { FrontModuleDescription } from '@/dto/modules';

export default {
  routes,
  rootRoute: CONTACTS_ROUTE_NAMES.root,
} as FrontModuleDescription;
