import { AppModule, AppModuleName } from '@/dto/modules';
import { PAINT_ROUTE_NAME, routes } from '@/modules/paint/routes';

export default {
  routes,
  storeModule: {
    name: AppModuleName.PAINT,
    icon: 'canvas',
    rootRoute: PAINT_ROUTE_NAME.ROOT,
  },
} as AppModule;
