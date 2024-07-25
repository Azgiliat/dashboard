import type { DocumentReference } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

import type { ExtendedUserInfo } from '@/dto/extendedUserInfo';
import { db } from '@/firebase/db';

const BASE_URL = 'users';

export function readUser(uid: string) {
  return doc(db, BASE_URL, uid) as DocumentReference<ExtendedUserInfo>;
}
