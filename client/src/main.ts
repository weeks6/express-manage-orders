import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { router } from './routes';
import { createPinia } from 'pinia';
import { PiniaColada } from '@pinia/colada';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PiniaColada);
app.use(router);

app.mount('#app');
