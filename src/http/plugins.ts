import { getAppPlugins } from '@/firebase/plugins';
import { baseRequest } from '@/http/base';

export function loadAllAvailableAppModules() {
  return baseRequest(getAppPlugins);
}
