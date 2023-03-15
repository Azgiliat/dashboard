<template>
  <div>
    icon: {{ icon }}
    <span class="text-gray1 font-semibold text-lg">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>
