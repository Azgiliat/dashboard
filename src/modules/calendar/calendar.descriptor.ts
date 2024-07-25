import routes, { CALENDAR_ROUTE_NAMES } from './routes';

import type { FrontModuleDescription } from '@/dto/modules';

const calendarModule: FrontModuleDescription = {
  routes,
  rootRoute: CALENDAR_ROUTE_NAMES.ROOT,
};

export default calendarModule;
