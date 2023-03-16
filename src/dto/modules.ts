import { RouteRecordRaw } from 'vue-router';

export enum AppModuleName {
  CALENDAR = 'calendar',
  CONTACTS = 'contacts',
}

export interface AppModule {
  name: AppModuleName;
  icon: string;
  displayName?: string;
  routes: RouteRecordRaw[];
}
