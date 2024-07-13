import type { StoreAppModule } from '@/dto/modules';
import { computed } from 'vue';

export function useModuleDisplayName(module: StoreAppModule) {
  return computed(() => module.displayName ?? module.name);
}
