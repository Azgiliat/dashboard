import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { LoginCredentials } from '@/dto/auth';
import { firebaseApp } from '@/firebase/index';

const auth = getAuth(firebaseApp);

export const getAuthObserver = (
  processUserCb: Parameters<typeof onAuthStateChanged>[1],
) => onAuthStateChanged(auth, processUserCb);

export const login = (credentials: LoginCredentials) =>
  signInWithEmailAndPassword(auth, credentials.login, credentials.password);

export const logout = () => signOut(auth);
