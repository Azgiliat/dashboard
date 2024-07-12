<template>
  <aside class="w-1/4 bg-white px-12 py-8">
    <p class="mb-6 text-base font-bold text-gray2">MAIN MENU</p>
    <ul>
      <li v-for="module of modulesStore.visibleModules" :key="module.name">
        <aside-menu-item :module="module" />
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import AsideMenuItem from '@/components/aside-menu/AsideMenuItem.vue';
import { useModulesStore } from '@/stores/modules';

const modulesStore = useModulesStore();
</script>
