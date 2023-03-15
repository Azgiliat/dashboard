import { getUserModules } from '@/firebase/modules';
import { baseRequest } from '@/http/base';

export function loadUserModulesRequest(userUid: string) {
  return baseRequest(() => getUserModules(userUid));
}
