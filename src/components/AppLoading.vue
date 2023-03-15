<template>
  <div class="bg-primary w-full flex-grow flex justify-center items-center">
    <p class="text-white text-4xl">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { loadUserModulesRequest } from '@/http/modules';
import { registerModuleInApp } from '@/modules/module-registrator';
import { useLoginStore } from '@/stores/login';

const loginStore = useLoginStore();
const router = useRouter();

onMounted(async () => {
  if (!loginStore.user) {
    return;
  }

  try {
    const userModules = await loadUserModulesRequest(loginStore.user.uid);

    await Promise.all(userModules.map(registerModuleInApp));
  } catch (err) {}

  router.push({ path: '/calendar' });

  //TODO go to some module
});
</script>
