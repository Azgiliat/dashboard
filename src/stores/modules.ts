import { AppModuleName, StoreAppModule } from '@/dto/modules';
import { loadAllAvailableAppModules } from '@/http/plugins';
import { useLoginStore } from '@/stores/login';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useModulesStore = defineStore('modules', () => {
  const loginStore = useLoginStore();
  const allAvailableAppModules = reactive<AppModuleName[]>([]);
  const coreModulesList = reactive<Map<AppModuleName, StoreAppModule>>(
    new Map([]),
  );
  const registeredModulesList = reactive<Map<AppModuleName, StoreAppModule>>(
    new Map([]),
  );
  const visibleModules = computed(() => [
    ...loginStore.userModules.reduce((prevResult, currentModuleName) => {
      const module = registeredModulesList.get(currentModuleName);
      if (module) {
        return [...prevResult, module];
      }

      return prevResult;
    }, [] as StoreAppModule[]),
    ...coreModulesList.values(),
  ]);
  const firstAvailableModule = computed<StoreAppModule | null>(
    () => visibleModules.value?.[0] || null,
  );
  function registerModule(module: StoreAppModule) {
    if (module.isCore) {
      coreModulesList.set(module.name, module);
      return;
    }
    registeredModulesList.set(module.name, module);
  }
  async function loadAppModules() {
    try {
      allAvailableAppModules.push(...(await loadAllAvailableAppModules()));
    } catch {}
  }

  return {
    registerModule,
    visibleModules,
    firstAvailableModule,
    registeredModulesList,
    loadAppModules,
    allAvailableAppModules,
  };
});
