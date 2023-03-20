import { AppModuleName } from '@/dto/modules';

export interface ExtendedUserInfo {
  contacts: string[];
  modules: AppModuleName[];
}
