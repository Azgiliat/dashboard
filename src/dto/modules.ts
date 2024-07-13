import type { RouteRecordRaw } from 'vue-router';

export enum AppModuleName {
  CALENDAR = 'calendar',
  CONTACTS = 'contacts',
  PROFILE = 'profile',
}

export interface StoreAppModule {
  name: AppModuleName;
  icon: string;
  rootRoute: string;
  displayName?: string;
  isCore?: boolean;
}

export interface AppModule {
  routes: RouteRecordRaw[];
  storeModule: StoreAppModule;
}
