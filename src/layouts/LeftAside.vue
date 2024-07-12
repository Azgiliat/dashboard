<template>
  <section class="flex flex-grow bg-gray3">
    <aside-menu />
    <router-view />
  </section>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/aside-menu/AsideMenu.vue';
</script>
