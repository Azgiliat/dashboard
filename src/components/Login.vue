<template>
  <div class="flex flex-grow flex-col justify-center bg-primary">
    <div class="mx-auto w-1/3 rounded-xl bg-white p-12">
      <p class="mb-4 text-4xl font-bold text-black">Welcome back!</p>
      <p class="mb-10 text-base text-gray2">Please login using your account</p>
      <dsh-input v-model="login" label="Username" class="mb-8" />
      <dsh-input
        v-model="password"
        type="password"
        label="Password"
        class="mb-10"
      />
      <dsh-button class="mb-8 w-full" text="LOGIN" @click="tryLogin" />
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
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import DshButton from '@/UI/DshButton';
import DshInput from '@/UI/DshInput.vue';
import { UITypes } from '@/UI/UITypes';
import { useLoginStore } from '@/stores/login';

const router = useRouter();
const loginStore = useLoginStore();

const login = ref('');
const password = ref('');

const tryLogin = () => {
  loginStore.login({
    password: password.value,
    login: login.value,
  });
};
const createNewUserWithEmail = () => {
  loginStore.registerNewUserWithEmail({
    email: login.value,
    password: password.value,
  });
};

watch(
  () => loginStore.user,
  (newUserState) => {
    if (newUserState) {
      router.push({
        path: '/',
      });
    }
  },
);
</script>
