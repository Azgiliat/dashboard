import { computed } from 'vue';

import type { StoreAppModule } from '@/dto/modules';

export function useModuleDisplayName(module: StoreAppModule) {
  return computed(() => module.displayName ?? module.name);
}
