import type { AppModuleName } from '@/dto/modules';
import type { Layout } from '@/layouts/layouts';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: Layout;
    moduleName?: AppModuleName;
  }
}
