import { getFromDb } from '@/firebase/db';

export function getUserModules(userUid: string) {
  return getFromDb<string[]>(`modules/${userUid}`);
}
