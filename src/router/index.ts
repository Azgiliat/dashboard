import { createRouter, createWebHistory } from 'vue-router';

import { RouteName } from '@/router/t';
import { useLoginStore } from '@/stores/login';

import loginRoutes from './login';

const router = createRouter({
  history: createWebHistory(),
  routes: [...loginRoutes],
});

router.beforeEach((to) => {
  const userStore = useLoginStore();

  console.log(userStore.user);

  if (to.name !== RouteName.LOGIN && !userStore.user) {
    return {
      name: RouteName.LOGIN,
    };
  }
});

export { router };
