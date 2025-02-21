import loginRoutes, { LoginRouteName } from './login';
import { createRouter, createWebHistory } from 'vue-router';

import BlankScreen from '@/components/BlankScreen';
import { getAuthObserver } from '@/firebase/auth';
import { Layout } from '@/layouts/layouts';
import { useLoginStore } from '@/stores/login';

const router = createRouter({
  history: createWebHistory('/dashboard/'),
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

router.beforeResolve(async (to) => {
  const userStore = useLoginStore();

  if (!userStore.initialAuthCheckFinished) {
    await userStore.checkInitAuth();
  }

  if (to.name !== LoginRouteName.LOGIN && !userStore.user) {
    return {
      name: LoginRouteName.LOGIN,
    };
  }
});

// todo track it globally? potentially need to overwrite this behaviour in future in some cases
getAuthObserver((user) => {
  if (!user) {
    router.push({
      name: LoginRouteName.LOGIN,
    });
  }
});

export { router };
