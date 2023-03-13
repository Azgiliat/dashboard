import { Layout } from '@/layouts/layouts';

export {};

import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: Layout;
  }
}
