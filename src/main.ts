import { createApp } from 'vue';

import { AppModule } from '@/dto/modules';
import { registerModuleInApp } from '@/modules/registerModuleInApp';
import { router } from '@/router';
import { pinia } from '@/stores';

import App from './App.vue';

import './styles/style.css';

const app = createApp(App).use(pinia).use(router);
const modules: Record<string, { default: AppModule }> = import.meta.glob(
  './modules/**/index.ts',
  { eager: true },
);

for (const module of Object.values(modules)) {
  // insert switch to turn off/on some modules related to some condition?
  registerModuleInApp(module.default);
}

app.mount('#app');
