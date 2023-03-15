import { defineStore } from 'pinia';
import { ref } from 'vue';

import { Module } from '@/modules/module-registrator';

export const useModulesStore = defineStore('modules', () => {
  const registeredModulesList = ref<Module[]>([]);
  function registerModule(module: Module) {
    registeredModulesList.value.push(module);
  }

  return {
    registerModule,
    registeredModulesList,
  };
});
