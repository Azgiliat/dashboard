<template>
  <div class="bg-primary flex-grow flex flex-col justify-center">
    <div class="mx-auto w-1/3 bg-white p-12 rounded-xl">
      <p class="text-4xl font-bold text-black mb-4">Welcome back!</p>
      <p class="text-gray2 text-base mb-10">Please login using your account</p>
      <dsh-input v-model="login" label="Username" class="mb-8" />
      <dsh-input
        v-model="password"
        type="password"
        label="Password"
        class="mb-10"
      />
      <dsh-button class="w-full mb-8" text="LOGIN" @click="tryLogin" />
      <dsh-button
        class="w-full"
        text="CREATE AN ACCOUNT"
        :type="UITypes.ACCENT"
        @click="createNewUserWithEmail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DshButton from '@/UI/DshButton';
import DshInput from '@/UI/DshInput.vue';
import { UITypes } from '@/UI/UITypes';
import { useLoginStore } from '@/stores/login';

const userStore = useLoginStore();

const login = ref('');
const password = ref('');

const tryLogin = () => {
  userStore.login({
    password: password.value,
    login: login.value,
  });
};
const createNewUserWithEmail = () => {
  userStore.registerNewUserWithEmail({
    email: login.value,
    password: password.value,
  });
};
</script>
