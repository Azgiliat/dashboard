import { ExternalUserInfo } from '@/dto/externalUserInfo';
import { getFromDb } from '@/firebase/db';

export function getExternalUserInfo(uid: string) {
  return getFromDb<ExternalUserInfo>(`externalUserInfo/${uid}`);
}
