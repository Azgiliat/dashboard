import { AppModuleName } from '@/dto/modules';
import { getFromDb } from '@/firebase/db';

export function getUserModules(userUid: string) {
  return getFromDb<AppModuleName[]>(`userModules/${userUid}`);
}
