import { doc, setDoc } from 'firebase/firestore';

import { AppModuleName } from '@/dto/modules';
import { db } from '@/firebase/db';

export function initiateNewUser(id: string) {
  return setDoc(doc(db, 'users', id), {
    contacts: [],
    modules: [AppModuleName.PROFILE, AppModuleName.CONTACTS],
  });
}
