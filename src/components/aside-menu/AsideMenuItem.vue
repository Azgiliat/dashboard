<template>
  <div
    class="flex items-center text-gray1 hover:cursor-pointer hover:text-primary"
  >
    <dsh-icon
      class="mr-8 h-8 w-8 fill-current transition-colors"
      :name="displayName"
    />
    <span class="text-lg font-semibold transition-colors">{{
      module.name
    }}</span>
  </div>
</template>

<script setup lang="ts">
import DshIcon from '@/UI/DshIcon';
import { useModuleDisplayName } from '@/composables/useModuleDisplayName';
import type { StoreAppModule } from '@/dto/modules';

const props = defineProps<{
  module: StoreAppModule;
}>();

const displayName = useModuleDisplayName(props.module);
</script>
