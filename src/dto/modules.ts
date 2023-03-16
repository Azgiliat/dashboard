import { RouteRecordRaw } from 'vue-router';

export interface AppModule {
  name: string;
  icon: string;
  displayName?: string;
  routes: RouteRecordRaw[];
}
