import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import VueCompositionAPI, { createApp, h } from '@vue/composition-api';
import App from './App.vue';
import router from './router';

Vue.use(VueCompositionAPI);

const app = createApp({
  router,
  pinia: createPinia(),
  render: () => h(App),
});
app.use(PiniaVuePlugin);

app.mount('#app');
