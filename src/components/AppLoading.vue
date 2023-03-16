<template>
  <div class="bg-primary w-full flex-grow flex justify-center items-center">
    <p class="text-white text-4xl">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.push({ path: '/calendar' });
  //TODO go to some module
});
</script>
