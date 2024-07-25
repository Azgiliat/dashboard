import type { RouteRecordRaw } from 'vue-router';

export enum AppModuleName {
  CALENDAR = 'calendar',
  CONTACTS = 'contacts',
  PROFILE = 'profile',
}

export type FrontModuleDescription = {
  rootRoute: string;
  routes: RouteRecordRaw[];
};

export type StoreAppModule = BackendModuleDescription & {
  rootRoute: string;
};

export type AppModule = {
  routes: RouteRecordRaw[];
  storeModule: StoreAppModule;
};

export type BackendModuleDescription = {
  isCore: boolean;
  name: AppModuleName;
  icon: string;
};

export type AppModulesList = { modules: Array<BackendModuleDescription> };
