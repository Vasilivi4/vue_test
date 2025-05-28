<script setup>
import { onMounted, ref } from 'vue'
import { getApartments, deleteApartment } from '../services/apartmentService'

const apartments = ref([])

const fetchApartments = async () => {
  const res = await getApartments()
  apartments.value = res
}

const removeApartment = async (id) => {
  if (confirm("Ви впевнені, що хочете видалити цю квартиру?")) {
    try {
      await deleteApartment(id)
      apartments.value = apartments.value.filter(apt => apt.$id !== id)
    } catch (error) {
      console.error("Помилка при видаленні:", error)
      alert("Не вдалося видалити квартиру.")
    }
  }
}

onMounted(fetchApartments)
</script>

<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="apt in apartments"
      :key="apt.$id"
      class="relative border p-4 shadow hover:shadow-lg transition rounded"
    >
      <router-link :to="`/listing/${apt.$id}`" class="block">
        <img :src="apt.image_url" class="w-full h-40 object-cover rounded mb-2" />
        <h2 class="text-lg font-bold">{{ apt.title }}</h2>
        <p>Назва: {{ apt.name }}</p>
        <p>Ціна: {{ apt.price }} грн</p>
        <p>Кімнат: {{ apt.rooms }}</p>
        <p>Площа: {{ apt.square }} м²</p>
        <p>Рієлтор: {{ apt.realter }}</p>
      </router-link>

      <!-- Кнопка видалення -->
      <button
        @click="removeApartment(apt.$id)"
        class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600"
      >
        Видалити
      </button>
    </div>
  </div>
</template>
