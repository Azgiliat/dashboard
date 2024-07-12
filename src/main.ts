import App from './App.vue';
import './styles/style.css';
import { router } from '@/router';
import { pinia } from '@/stores';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';
import { createApp } from 'vue';

const app = createApp(App).use(pinia).use(router);

app.mount('#app');
