<script setup>
import { ref } from 'vue';
import { login } from '@/services/auth.js';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
    alert('Вход выполнен успешно!');
    router.push('/'); // переходим на главную после входа
  } catch (error) {
    alert('Ошибка при входе: ' + error.message);
  }
};
</script>

<template>
  <div class="max-w-sm mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Увійти</h2>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <input v-model="email" type="email" placeholder="Email" required class="border p-2 w-full" />
      <input v-model="password" type="password" placeholder="Пароль" required class="border p-2 w-full" />
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Увійти</button>
    </form>
  </div>
</template>
