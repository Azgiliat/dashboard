import { User } from 'firebase/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { CreateWithEmailCredentials, LoginCredentials } from '@/dto/auth';
import { getAuthObserver } from '@/firebase/auth';
import {
  loginRequest,
  logoutRequest,
  registerWithEmailRequest,
} from '@/http/login';

export const useLoginStore = defineStore('login', () => {
  const user = ref<User | null>(null);
  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };
  function login(credentials: LoginCredentials) {
    return loginRequest(credentials);
  }
  function logout() {
    return logoutRequest();
  }
  function registerNewUserWithEmail(credentials: CreateWithEmailCredentials) {
    return registerWithEmailRequest(credentials);
  }

  getAuthObserver(setUser);

  return {
    user,
    login,
    logout,
    registerNewUserWithEmail,
  };
});
