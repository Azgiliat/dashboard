import { getUserModules } from '@/firebase/modules';
import { baseRequest } from '@/http/base';

export function loadUserModules(userUid: string) {
  return baseRequest(() => getUserModules(userUid));
}
