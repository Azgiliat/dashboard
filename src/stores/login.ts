import { User } from 'firebase/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { CreateWithEmailCredentials, LoginCredentials } from '@/dto/auth';
import { AppModuleName } from '@/dto/modules';
import { getAuthObserver } from '@/firebase/auth';
import {
  loginRequest,
  logoutRequest,
  registerWithEmailRequest,
} from '@/http/login';
import { loadUserModules } from '@/http/modules';

export const useLoginStore = defineStore('login', () => {
  const localUser = localStorage.getItem('fb-user');
  const userModules = ref<AppModuleName[]>([]);
  const user = ref<User | null>(localUser ? JSON.parse(localUser) : null);
  const setUser = (newUser: User | null) => {
    user.value = newUser;

    if (newUser === null) {
      localStorage.removeItem('fb-user');
    } else {
      localStorage.setItem('fb-user', JSON.stringify(newUser));
    }
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
  async function fetchUserModules() {
    if (!user.value) {
      return;
    }

    try {
      userModules.value = await loadUserModules(user.value.uid);
    } catch {}
  }

  getAuthObserver(setUser);

  return {
    user,
    userModules,
    login,
    logout,
    registerNewUserWithEmail,
    fetchUserModules,
  };
});
