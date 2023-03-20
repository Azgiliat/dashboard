import { FunctionalComponent, h } from 'vue';

const BlankScreen: FunctionalComponent = () => {
  return h('div', {}, h('p', 'Welcome to the Dashboard App'));
};

BlankScreen.displayName = 'BlankScreen';

export default BlankScreen;
