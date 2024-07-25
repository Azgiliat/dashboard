import { defineStore } from 'pinia';
import { computed, reactive, ref, watch } from 'vue';

import type { AppModuleName, StoreAppModule } from '@/dto/modules';
import { registerAsyncModuleInApp } from '@/modules/registerModuleInApp';
import { useAllAppModulesQuery } from '@/queries/modules/allAppModules';
import { useExtendedUserStore } from '@/stores/extendedUser';
import { useLoginStore } from '@/stores/login';

export const useModulesStore = defineStore('modules', () => {
  const loginStore = useLoginStore();
  const extendedUserStore = useExtendedUserStore();

  const modulesInitiated = ref(false);
  const {
    docValue: allAvailableAppModules,
    isInitialLoading,
    init,
  } = useAllAppModulesQuery();
  const registeredCoreModules = reactive<Map<AppModuleName, StoreAppModule>>(
    new Map([]),
  );

  const registeredUserModules = reactive<Map<AppModuleName, StoreAppModule>>(
    new Map([]),
  );

  const visibleModules = computed<StoreAppModule[]>(() => [
    ...registeredCoreModules.values(),
    ...registeredUserModules.values(),
  ]);
  const firstAvailableModule = computed<StoreAppModule | null>(
    () => visibleModules.value?.[0] || null,
  );

  function registerModule(module: StoreAppModule) {
    if (module.isCore) {
      registeredCoreModules.set(module.name, module);
    } else {
      registeredUserModules.set(module.name, module);
    }
  }

  async function initModules() {
    if (!loginStore.user) {
      modulesInitiated.value = true;
      return;
    }

    if (isInitialLoading.value) {
      await new Promise((resolve) => {
        watch(isInitialLoading, resolve, {
          once: true,
        });
      });
    }

    if (!allAvailableAppModules.value) {
      modulesInitiated.value = true;
      return;
    }

    const modulesRegistrations: Promise<void>[] = [];
    for (const module of allAvailableAppModules.value.modules) {
      if (
        module.isCore ||
        extendedUserStore.userModules.find(
          (moduleName) => module.name === moduleName,
        )
      ) {
        modulesRegistrations.push(registerAsyncModuleInApp(module));
      }
    }

    await Promise.all(modulesRegistrations);
    modulesInitiated.value = true;
  }

  watch(
    () => loginStore.user,
    (user) => {
      if (user) {
        init();
        initModules();
      }
    },
  );

  return {
    registerModule,
    visibleModules,
    firstAvailableModule,
    registeredUserModules,
    allAvailableAppModules,
    isInitialLoading,
    initModules,
    registeredCoreModules,
    modulesInitiated,
  };
});
