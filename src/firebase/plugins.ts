import { AppModuleName } from '@/dto/modules';
import { getFromDb } from '@/firebase/db';

export function getAppPlugins() {
  return getFromDb<AppModuleName[]>('plugins');
}
