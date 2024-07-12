import { firebaseApp } from '@/firebase/index';
import { child, get, getDatabase, ref } from 'firebase/database';

const dbRef = ref(getDatabase(firebaseApp));
function getFromDb<T = never>(url: string): Promise<T> {
  return get(child(dbRef, url)).then((snapshot) => {
    if (!snapshot.exists()) {
      throw new Error(`Can't get data from ${url}`);
    }

    return snapshot.val();
  });
}

export { getFromDb };
