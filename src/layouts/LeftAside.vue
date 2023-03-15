<template>
  <section class="bg-gray3 flex-grow flex">
    <aside-menu />
    <router-view />
  </section>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/aside-menu/AsideMenu.vue';
</script>
