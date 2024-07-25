<template>
  <component :is="computedLayout" />
</template>

<script setup lang="ts">
import LeftAside from './LeftAside.vue';
import NoLayout from './NoLayout.vue';
import { Layout } from './layouts';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const computedLayout = computed(() => {
  switch (route.meta?.layout) {
    case Layout.NoLayout:
      return NoLayout;
    case Layout.LeftAside:
      return LeftAside;
    default:
      return NoLayout;
  }
});
</script>
