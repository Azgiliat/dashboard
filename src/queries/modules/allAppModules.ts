import { useSyncedDocValue } from '@/composables/firestore/SyncedDocValue';
import { readAllAppPlugins } from '@/firebase/modules';

export function useAllAppModulesQuery() {
  const doc = readAllAppPlugins();
  return useSyncedDocValue(doc);
}
