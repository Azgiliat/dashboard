import type { MaybeRef } from 'vue';
import { isRef, toValue, watch } from 'vue';

import type { useSyncedDocValue } from '@/composables/firestore/SyncedDocValue';
import { useSharedDocValue } from '@/composables/firestore/SyncedDocValue';
import type { ExtendedUserInfo } from '@/dto/extendedUserInfo';
import { readUser } from '@/firebase/users';

const list = new Map<
  string | null,
  ReturnType<typeof useSyncedDocValue<ExtendedUserInfo>>
>();

export function useUserQuery(id: MaybeRef<string | null>) {
  const idValue = toValue(id);
  let userData = idValue ? list.get(idValue) : undefined;

  if (userData) {
    return userData;
  }

  if (isRef(id)) {
    watch(id, (newId, oldId) => {
      if (userData) {
        if (newId === null) {
          userData.reset();
          return;
        }

        userData.stop();
        userData.init(readUser(newId));
      } else {
        userData = useSharedDocValue(newId ? readUser(newId) : null);
      }
      list.set(newId, userData);
      list.delete(oldId);
    });
  }

  userData = useSharedDocValue(idValue ? readUser(idValue) : null);

  list.set(idValue, userData);

  return userData;
}
