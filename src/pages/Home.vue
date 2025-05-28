<script setup>
import { onMounted, ref } from 'vue'
import { getApartments } from '../services/apartmentService'

const apartments = ref([])

onMounted(async () => {
  const res = await getApartments()
  apartments.value = res.documents
})
</script>

<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="apt in apartments"
      :key="apt.$id"
      class="border p-4 shadow hover:shadow-lg transition rounded"
    >
      <img :src="apt.image_url" class="w-full h-40 object-cover rounded mb-2" />
      <h2 class="text-lg font-bold">{{ apt.title }}</h2>
      <p>Ціна: {{ apt.price }} грн</p>
      <p>Кімнат: {{ apt.number_of_rooms }}</p>
      <p>Площа: {{ apt.square }} м²</p>
    </div>
  </div>
</template>
