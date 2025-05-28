import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { registerSW } from 'virtual:pwa-register'

import "./style.css";

createApp(App).use(router).mount("#app");

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Доступна нова версія. Оновити?')) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log('Програма готова для офлайн-режиму.')
  },
})