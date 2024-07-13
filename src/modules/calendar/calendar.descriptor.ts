import routes, { CALENDAR_ROUTE_NAMES } from './routes';
import type { AppModule} from '@/dto/modules';
import { AppModuleName } from '@/dto/modules';

const calendarModule: AppModule = {
  routes,
  storeModule: {
    name: AppModuleName.CALENDAR,
    rootRoute: CALENDAR_ROUTE_NAMES.ROOT,
    icon: 'calendar',
  },
};

export default calendarModule;
