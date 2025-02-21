import type { User } from 'firebase/auth';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import type { CreateWithEmailCredentials, LoginCredentials } from '@/dto/auth';
import { auth, getAuthObserver } from '@/firebase/auth';
import { loginRequest, logoutRequest, registerWithEmail } from '@/http/auth';

export const useLoginStore = defineStore('login', () => {
  const user = ref<User | null>(auth.currentUser);

  const initialAuthCheckFinished = ref(false);

  function setUser(newUser: User | null) {
    user.value = newUser;
  }
  function login(credentials: LoginCredentials) {
    return loginRequest(credentials);
  }
  function logout() {
    return logoutRequest();
  }
  function registerNewUserWithEmail(credentials: CreateWithEmailCredentials) {
    return registerWithEmail(credentials);
  }

  async function checkInitAuth() {
    if (initialAuthCheckFinished.value) {
      return;
    }

    await new Promise((resolve) => {
      const stop = watch(initialAuthCheckFinished, () => {
        stop();
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    });
  }

  getAuthObserver((user) => {
    setUser(user);

    if (!initialAuthCheckFinished.value) {
      initialAuthCheckFinished.value = true;
    }
  });

  return {
    user,
    login,
    logout,
    registerNewUserWithEmail,
    initialAuthCheckFinished,
    checkInitAuth,
  };
});
