import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

import { AppModuleName, StoreAppModule } from '@/dto/modules';
import { useLoginStore } from '@/stores/login';

export const useModulesStore = defineStore('modules', () => {
  const loginStore = useLoginStore();
  const registeredModulesList = reactive<Map<AppModuleName, StoreAppModule>>(
    new Map([]),
  );
  const visibleModules = computed(() =>
    loginStore.userModules.reduce((prevResult, currentModuleName) => {
      const module = registeredModulesList.get(currentModuleName);
      if (module) {
        return [...prevResult, module];
      }

      return prevResult;
    }, [] as StoreAppModule[]),
  );
  const firstAvailableModule = computed<StoreAppModule | null>(
    () => visibleModules.value?.[0] || null,
  );
  function registerModule(module: StoreAppModule) {
    registeredModulesList.set(module.name, module);
  }

  return {
    registerModule,
    visibleModules,
    firstAvailableModule,
    registeredModulesList,
  };
});
