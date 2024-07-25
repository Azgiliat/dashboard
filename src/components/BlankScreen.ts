import type { FunctionalComponent } from 'vue';
import { h } from 'vue';

import { useLoginStore } from '@/stores/login';

const BlankScreen: FunctionalComponent = () => {
  const loginStore = useLoginStore();
  return h(
    'div',
    {
      class: 'p-8 w-full flex justify-center items-center',
    },
    [
      h('p', 'Welcome to the Dashboard App'),
      h(
        'button',
        {
          onClick() {
            loginStore.logout();
          },
        },
        'logout',
      ),
    ],
  );
};

BlankScreen.displayName = 'BlankScreen';

export default BlankScreen;
