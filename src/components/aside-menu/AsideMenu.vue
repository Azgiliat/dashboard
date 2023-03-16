<template>
  <aside class="w-1/4 bg-white px-12 py-8">
    <p class="text-base text-gray2 font-bold mb-6">MAIN MENU</p>
    <ul>
      <li v-for="module of modulesStore.visibleModules" :key="module.name">
        <aside-menu-item
          :icon="module.icon"
          :title="module.displayName ?? module.name"
        />
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import AsideMenuItem from '@/components/aside-menu/AsideMenuItem.vue';
import { useModulesStore } from '@/stores/modules';

const modulesStore = useModulesStore();
</script>
