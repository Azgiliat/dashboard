import type { ExtendedUserInfo } from '@/dto/extendedUserInfo';
import type { AppModuleName } from '@/dto/modules';
import { getFromDb } from '@/firebase/db';

const baseUrl = 'extendedUserInfo';

// TODO refactor requests as class

export function getExternalUserInfo(uid: string) {
  return getFromDb<ExtendedUserInfo>(`${baseUrl}/${uid}`);
}

export function getUserCompany(uid: string) {
  return getFromDb<ExtendedUserInfo>(`${baseUrl}/${uid}/company`);
}

export function getUserContacts(uid: string) {
  return getFromDb<ExtendedUserInfo>(`${baseUrl}/${uid}/contacts`);
}

export function getUserModules(uid: string) {
  return getFromDb<AppModuleName[]>(`${baseUrl}/${uid}/plugins`);
}
