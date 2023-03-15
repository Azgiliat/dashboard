import { getDatabase, get, ref, child } from 'firebase/database';

import { firebaseApp } from '@/firebase/index';

const dbRef = ref(getDatabase(firebaseApp));

export function getUserModules(userUid: string): Promise<string[]> {
  return get(child(dbRef, `modules/${userUid}`)).then((snapshot) => {
    return snapshot.exists() ? snapshot.val() : [];
  });
}
