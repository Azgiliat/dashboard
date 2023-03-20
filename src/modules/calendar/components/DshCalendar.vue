<template>
  <dsh-icon name="calendar" />
  <router-link :to="'/calendar/asd'">calendar</router-link>
  <router-view />
</template>

<script setup lang="ts">
import DshIcon from '@/UI/DshIcon';
</script>
