import { RouteRecordRaw } from 'vue-router';

export enum AppModuleName {
  CALENDAR = 'calendar',
  CONTACTS = 'contacts',
}

export interface StoreAppModule {
  name: AppModuleName;
  icon: string;
  rootRoute: string;
  displayName?: string;
}

export interface AppModule {
  routes: RouteRecordRaw[];
  storeModule: StoreAppModule;
}
