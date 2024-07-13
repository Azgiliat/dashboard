import type { FunctionalComponent } from 'vue';
import { h } from 'vue';

const BlankScreen: FunctionalComponent = () => {
  return h(
    'div',
    {
      class: 'p-8 w-full flex justify-center items-center',
    },
    h('p', 'Welcome to the Dashboard App'),
  );
};

BlankScreen.displayName = 'BlankScreen';

export default BlankScreen;
