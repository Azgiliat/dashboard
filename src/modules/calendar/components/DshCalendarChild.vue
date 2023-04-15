<template>
  <router-link to="/">calendar child</router-link>
  {{ t }}
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  a: Object;
}>();
const { a } = toRefs(props);
const { t } = toRefs(a.value);

setTimeout(() => {
  t.value = 42;
}, 5000);
</script>
