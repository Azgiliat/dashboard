import { AppModuleName } from '@/dto/modules';
import { Layout } from '@/layouts/layouts';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: Layout;
    moduleName?: AppModuleName;
  }
}
