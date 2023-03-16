import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { AppModule, AppModuleName } from '@/dto/modules';
import { useLoginStore } from '@/stores/login';

export const useModulesStore = defineStore('modules', () => {
  const loginStore = useLoginStore();
  const registeredModulesList = ref<Map<AppModuleName, AppModule>>(new Map([]));
  const visibleModules = computed(() =>
    loginStore.userModules.filter(registeredModulesList.value.has),
  );
  function registerModule(module: AppModule) {
    registeredModulesList.value.set(module.name, module);
  }

  return {
    registerModule,
    visibleModules,
  };
});
