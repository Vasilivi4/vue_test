<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { logout, getUser } from "@/services/auth";

const user = ref(null);
const router = useRouter();

onMounted(async () => {
  user.value = await getUser();
});

const handleLogout = async () => {
  await logout();
  user.value = null;
  router.push("/auth");
};
</script>

<template>
  <nav class="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
    <RouterLink to="/" class="text-xl font-bold">🏠 RentalApp</RouterLink>

    <div class="flex gap-4 items-center">
      <RouterLink to="/" class="hover:underline">Головна</RouterLink>

      <template v-if="user">
        <RouterLink to="/edit" class="hover:underline">Створити</RouterLink>
        <button @click="handleLogout" class="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Вийти</button>
      </template>

      <template v-else>
        <RouterLink to="/auth" class="hover:underline">Увійти / Зареєструватись</RouterLink>
      </template>
    </div>
  </nav>
</template>

<style scoped>
button {
  transition: background 0.3s ease;
}
</style>
