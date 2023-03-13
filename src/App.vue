<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="'asd'" />
  <hello-world msg="" />
  <BaseButton :text="a" :type="UITypes.ACCENT" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import BaseButton from '@/UI/BaseButton';
import { UITypes } from '@/UI/UITypes';

import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: {
    HelloWorld,
    BaseButton,
  },
  props: {},
  setup() {
    const a = ref('button');

    setTimeout(() => {
      a.value = 'ert';
    }, 4000);
    return {
      UITypes,
      a,
    };
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
