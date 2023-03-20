<template>
  <section class="min-h-screen flex-col flex">
    <app-loading v-if="!appInitiated" />
    <computed-layout v-else />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AppLoading from '@/components/AppLoading.vue';
import ComputedLayout from '@/layouts/ComputedLayout.vue';
import { registerModuleInApp } from '@/modules/registerModuleInApp';
import { useLoginStore } from '@/stores/login';
import { useModulesStore } from '@/stores/modules';

const loginStore = useLoginStore();
const modulesStore = useModulesStore();
const router = useRouter();
const route = useRoute();

const appInitiated = ref(false);

async function initApp() {
  await loginStore.fetchUserModules();
  await Promise.all(loginStore.userModules.map(registerModuleInApp));

  setTimeout(() => {
    if (route.fullPath !== '' && modulesStore.firstAvailableModule) {
      router.push({
        name: modulesStore.firstAvailableModule.name,
      });
    }
    appInitiated.value = true;
  }, 1000);
}

onMounted(initApp);
</script>
