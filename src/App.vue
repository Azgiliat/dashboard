<template>
  <section class="flex min-h-screen flex-col">
    <app-loading v-if="!appReady" />
    <computed-layout v-else />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import AppLoading from '@/components/AppLoading.vue';
import ComputedLayout from '@/layouts/ComputedLayout.vue';
import { useLoginStore } from '@/stores/login';
import { useModulesStore } from '@/stores/modules';

const router = useRouter();

const modulesStore = useModulesStore();
const loginStore = useLoginStore();

const appInitiated = ref(false);
const appReady = computed(
  () =>
    appInitiated.value &&
    !modulesStore.isInitialLoading &&
    loginStore.initialAuthCheckFinished,
);

async function initApp() {
  await router.isReady();
  await loginStore.checkInitAuth();
  await modulesStore.initModules();

  appInitiated.value = true;
}

onMounted(initApp);
</script>
