<template>
  <ul>
    <li v-for="(module, index) in selectedState" :key="module.moduleName">
      <dsh-checkbox
        v-model="selectedState[index].selected"
        :text="module.moduleName"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

import DshCheckbox from '@/UI/DshCheckbox.vue';
import { useModulesStore } from '@/stores/modules';

const { allAvailableAppModules, visibleModules } =
  storeToRefs(useModulesStore());
const selectedState = reactive(
  allAvailableAppModules.value
    ? allAvailableAppModules.value.modules.map(({ name }) => ({
        moduleName: name,
        selected: visibleModules.value.some((module) => module.name === name),
      }))
    : [],
);
</script>
