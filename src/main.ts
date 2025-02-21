import App from './App.vue';
import './styles/style.css';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';

import { router } from '@/router';
import { pinia } from '@/stores';

const app = createApp(App).use(router).use(pinia);

app.mount('#app');
