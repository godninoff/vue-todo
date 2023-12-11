import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import { createPinia } from "pinia";
import App from "./App.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

export default defineNuxtPlugin((nuxtApp) => {
  const vfm = createVfm();

  nuxtApp.vueApp.use(vfm);
});

app.use(pinia);

app.mount("#app");
