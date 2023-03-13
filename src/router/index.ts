import { createRouter, createWebHistory } from 'vue-router';

import loginRoutes from './login';

const router = createRouter({
  history: createWebHistory(),
  routes: [...loginRoutes],
});

export { router };
