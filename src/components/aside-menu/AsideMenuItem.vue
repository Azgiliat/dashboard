<template>
  <div
    class="flex items-center text-gray1 hover:text-primary hover:cursor-pointer"
  >
    <dsh-icon
      class="mr-8 w-8 h-8 transition-colors fill-current"
      :name="icon"
    />
    <span class="font-semibold text-lg transition-colors">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import DshIcon from '@/UI/DshIcon';

defineProps<{
  title: string;
  icon: string;
}>();
</script>
