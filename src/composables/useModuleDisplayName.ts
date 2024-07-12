import { computed } from 'vue';

import { StoreAppModule } from '@/dto/modules';

export function useModuleDisplayName(module: StoreAppModule) {
  return computed(() => module.displayName ?? module.name);
}
