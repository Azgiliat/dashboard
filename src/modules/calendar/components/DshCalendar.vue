<template>
  <dsh-icon name="calendar" />
  <router-link :to="'/calendar/asd'">calendar</router-link>
  <router-view :a="d" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import DshIcon from '@/UI/DshIcon';
const d = reactive({
  t: 2,
});

setTimeout(() => {
  d.t = 22;
}, 3000);
</script>
