import {
  getExternalUserInfo,
  getUserCompany,
  getUserContacts,
} from '@/firebase/extendedUserInfo';
import { baseRequest } from '@/http/base';

export function loadExternalUserInfo(uid: string) {
  return baseRequest(() => getExternalUserInfo(uid));
}

export function loadUserCompany(uid: string) {
  return baseRequest(() => getUserCompany(uid));
}
export function loadUserContacts(uid: string) {
  return baseRequest(() => getUserContacts(uid));
}
