import { createApp } from 'vue';

// import { AppModule } from '@/dto/modules';
// import { registerModuleInApp } from '@/modules/registerModuleInApp';
import { router } from '@/router';
import { pinia } from '@/stores';

import App from './App.vue';

import './styles/style.css';

const app = createApp(App).use(pinia);
// const modules = import.meta.glob<{ default: AppModule }>(
//   './modules/**/*.descriptor.ts',
//   {
//     eager: true,
//   },
// );

// for (const module of Object.values(modules)) {
//   // insert switch to turn off/on some modules related to some condition?
//   registerModuleInApp(module.default);
// }

app.use(router).mount('#app');
