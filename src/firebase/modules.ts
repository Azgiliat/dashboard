import type { DocumentReference } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

import type { AppModulesList } from '@/dto/modules';
import { db } from '@/firebase/db';

const BASE_URL = 'modules';

export function readAllAppPlugins() {
  return doc(db, BASE_URL, 'all') as DocumentReference<AppModulesList>;
}
