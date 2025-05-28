<script setup>
import { ref } from 'vue';
import { register } from '@/services/auth.js';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const name = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    await register(email.value, password.value, name.value);
    alert('Реєстрація успішна!');
    router.push('/'); // после регистрации редирект на главную
  } catch (error) {
    alert('Помилка при реєстрації: ' + error.message);
  }
};
</script>

<template>
  <div class="max-w-sm mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Зареєструватись</h2>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <input v-model="name" type="text" placeholder="Ім'я" required class="border p-2 w-full" />
      <input v-model="email" type="email" placeholder="Email" required class="border p-2 w-full" />
      <input v-model="password" type="password" placeholder="Пароль" required class="border p-2 w-full" />
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Зареєструватись</button>
    </form>
  </div>
</template>
