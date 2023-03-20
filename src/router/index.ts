import { createRouter, createWebHistory } from 'vue-router';

import BlankScreen from '@/components/BlankScreen';
import { Layout } from '@/layouts/layouts';
import { useLoginStore } from '@/stores/login';

import loginRoutes, { LoginRouteName } from './login';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      meta: {
        layout: Layout.LeftAside,
      },
      component: BlankScreen,
    },
    ...loginRoutes,
    {
      path: '/:notFound(.*)*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to) => {
  const userStore = useLoginStore();

  if (to.name !== LoginRouteName.LOGIN && !userStore.user) {
    return {
      name: LoginRouteName.LOGIN,
    };
  }
});

export { router };
