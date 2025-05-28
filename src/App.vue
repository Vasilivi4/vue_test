<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { ref, onMounted } from "vue";

const deferredPrompt = ref(null);
const showInstallButton = ref(false);

onMounted(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt.value = e;
    showInstallButton.value = true;
  });
});

function installApp() {
  if (!deferredPrompt.value) return;
  deferredPrompt.value.prompt();
  deferredPrompt.value.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    deferredPrompt.value = null;
    showInstallButton.value = false;
  });
}
</script>

<template>
  <Navbar />
  <RouterView />
  <button
    v-if="showInstallButton"
    @click="installApp"
    class="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow"
  >
    Встановити додаток
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
