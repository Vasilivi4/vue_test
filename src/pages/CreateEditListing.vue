<script setup>
import { ref } from 'vue'
import { ID } from 'appwrite'
import { databases } from '@/lib/appwrite' // путь может отличаться

const name = ref('')
const price = ref(0)
const rooms = ref(1)
const square = ref(20)
const descriptions = ref('')
const realter = ref('')

const handleSubmit = async () => {
  try {
    const response = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DB,
      import.meta.env.VITE_APPWRITE_APARTMENT_COLLECTION_ID,
      ID.unique(),
      {
        name: name.value,
        price: Number(price.value),
        rooms: Number(rooms.value),
        square: Number(square.value),
        descriptions: descriptions.value,
        realter: realter.value
      }
    )
    console.log('Created:', response)
    alert('Квартира додана успішно!')
  } catch (err) {
  console.error('Помилка при збереженні:', err.message || err)
  alert(`Помилка при збереженні: ${err.message || err}`)
}

}
</script>

<template>
  <div class="p-4 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Create Apartment</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block font-semibold">Назва</label>
        <input v-model="name" class="border p-2 w-full" required />
      </div>
      <div>
        <label class="block font-semibold">Ціна</label>
        <input type="number" v-model="price" class="border p-2 w-full" required />
      </div>
      <div>
        <label class="block font-semibold">Кількість кімнат</label>
        <input type="number" v-model="rooms" class="border p-2 w-full" required />
      </div>
      <div>
        <label class="block font-semibold">Площа (м²)</label>
        <input type="number" v-model="square" class="border p-2 w-full" required />
      </div>
      <div>
        <label class="block font-semibold">Опис</label>
        <textarea v-model="descriptions" class="border p-2 w-full" rows="4" required></textarea>
      </div>
      <div>
        <label class="block font-semibold">Рієлтор</label>
        <input v-model="realter" class="border p-2 w-full" required />
      </div>
      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Зберегти
      </button>
    </form>
  </div>
</template>
