import { AppModule, AppModuleName } from '@/dto/modules';

import routes, { CALENDAR_ROUTE_NAMES } from './routes';

const calendarModule: AppModule = {
  routes,
  storeModule: {
    name: AppModuleName.CALENDAR,
    rootRoute: CALENDAR_ROUTE_NAMES.ROOT,
    icon: 'Calendar',
  },
};

export default calendarModule;
