import { createApp } from 'vue';

import { router } from '@/router';
import { pinia } from '@/stores';

import App from './App.vue';

import './styles/style.css';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';

const app = createApp(App).use(pinia);

app.use(router).mount('#app');
