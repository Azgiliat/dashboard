import { createApp } from 'vue';

import { router } from '@/router';
import { pinia } from '@/stores';

import App from './App.vue';

import './styles/style.css';

createApp(App).use(pinia).use(router).mount('#app');
