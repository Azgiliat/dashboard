<template>
  <dsh-checkbox v-model="a" text="test chekcbopx" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DshCheckbox from '@/UI/DshCheckbox.vue';

const a = ref(true);
</script>
