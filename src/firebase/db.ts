import { getFirestore } from 'firebase/firestore';

import { firebaseApp } from '@/firebase/index';

const db = getFirestore(firebaseApp);

export { db };
