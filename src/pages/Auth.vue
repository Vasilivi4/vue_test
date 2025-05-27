<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login, register } from "@/services/auth";

const router = useRouter();

const isLogin = ref(true);
const email = ref("");
const password = ref("");
const name = ref("");
const error = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  error.value = "";
  loading.value = true;
  try {
    if (isLogin.value) {
      await login(email.value, password.value);
    } else {
      await register(email.value, password.value, name.value);
    }
    router.push("/");
  } catch (err) {
    error.value = err?.message || "Щось пішло не так";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded shadow">
    <h2 class="text-2xl font-bold mb-4">{{ isLogin ? "Увійти" : "Зареєструватись" }}</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block font-semibold">Email</label>
        <input v-model="email" type="email" class="w-full border p-2 rounded" required />
      </div>

      <div>
        <label class="block font-semibold">Пароль</label>
        <input v-model="password" type="password" class="w-full border p-2 rounded" required />
      </div>

      <div v-if="!isLogin">
        <label class="block font-semibold">Ім’я</label>
        <input v-model="name" type="text" class="w-full border p-2 rounded" required />
      </div>

      <div v-if="error" class="text-red-600">{{ error }}</div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" :disabled="loading">
        {{ isLogin ? "Увійти" : "Зареєструватись" }}
      </button>
    </form>

    <p class="mt-4 text-sm text-center">
      {{ isLogin ? "Немає акаунта?" : "Вже є акаунт?" }}
      <button @click="isLogin = !isLogin" class="text-blue-600 hover:underline ml-1">
        {{ isLogin ? "Зареєструватись" : "Увійти" }}
      </button>
    </p>
  </div>
</template>

<style scoped></style>
