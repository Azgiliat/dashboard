import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { CreateWithEmailCredentials, LoginCredentials } from '@/dto/auth';
import { firebaseApp } from '@/firebase/index';

const auth = getAuth(firebaseApp);

export const getAuthObserver = (
  processUserCb: Parameters<typeof onAuthStateChanged>[1],
) => onAuthStateChanged(auth, processUserCb);

export const login = (credentials: LoginCredentials) =>
  signInWithEmailAndPassword(auth, credentials.login, credentials.password);

export const logout = () => signOut(auth);

export const registerNewUserWithEmail = (
  credentials: CreateWithEmailCredentials,
) =>
  createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
