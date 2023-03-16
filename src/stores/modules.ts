import { defineStore } from 'pinia';
import { ref } from 'vue';

import { AppModule } from '@/dto/modules';

export const useModulesStore = defineStore('modules', () => {
  const registeredModulesList = ref<AppModule[]>([]);
  function registerModule(module: AppModule) {
    registeredModulesList.value.push(module);
  }

  return {
    registerModule,
    registeredModulesList,
  };
});
