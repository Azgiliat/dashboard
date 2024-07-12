<template>
  <ul>
    <li v-for="(module, index) in selectedState" :key="module.moduleName">
      <dsh-checkbox
        v-model="selectedState[index].selected"
        :text="module.moduleName"
        :disabled="selectedState[index].disabled"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, watch } from 'vue';

import DshCheckbox from '@/UI/DshCheckbox.vue';
import { useModulesStore } from '@/stores/modules';

const { allAvailableAppModules, registeredModulesList, visibleModules } =
  storeToRefs(useModulesStore());
const selectedState = reactive(
  allAvailableAppModules.value.map((moduleName) => ({
    moduleName,
    selected: visibleModules.value.some((module) => module.name === moduleName),
    disabled: !registeredModulesList.value.has(moduleName),
  })),
);
</script>
