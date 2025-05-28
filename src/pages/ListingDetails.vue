<template>
  <div class="max-w-5xl mx-auto p-6">
    <!-- Зображення -->
    <div class="relative mb-4">
      <img :src="apartment.image_url" class="w-full rounded-xl object-cover h-96" />
      <button class="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow">
        {{ apartment.images?.length || 1 }} фотографій
      </button>
    </div>

    <!-- Ціна + Адреса -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold">{{ apartment.price }} грн/міс</h1>
        <p class="text-lg font-medium mt-1">{{ apartment.title }}</p>
        <p class="text-sm text-gray-500">{{ apartment.address }}</p>
      </div>
    </div>

    <!-- Теги -->
    <div class="mt-4 flex flex-wrap gap-2">
      <span class="tag bg-purple-200 text-purple-800">Преміум</span>
      <span class="tag bg-green-200 text-green-800">Комісія 50%</span>
      <span class="tag bg-gray-200 text-gray-800">Можна з дітьми</span>
    </div>

    <!-- Характеристики -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-700">
      <div>Кімнат: {{ apartment.number_of_rooms }}</div>
      <div>Площа: {{ apartment.square }} м²</div>
      <div>Тип: {{ apartment.property_type }}</div>
      <div>Доступність: {{ apartment.is_active ? 'Так' : 'Ні' }}</div>
      <!-- можна додати поверх/ремонт якщо є -->
    </div>

    <!-- Опис -->
    <div class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Опис</h2>
      <p>{{ apartment.description }}</p>
    </div>

    <!-- Рієлтор -->
    <div class="mt-10 border-t pt-6 flex items-center gap-4">
      <img :src="realtor.image" class="w-20 h-20 object-cover rounded-full border" />
      <div>
        <p class="font-bold">{{ realtor.name }}</p>
        <p class="text-sm text-gray-500">{{ realtor.agency }}</p>
        <!-- бейджі -->
        <div class="flex gap-2 mt-2">
          <span class="badge bg-green-200">✅ Верифікований</span>
          <span class="badge bg-yellow-200">PRO</span>
          <span class="badge bg-gray-200">9 років</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getApartmentById } from '../services/apartmentService'

const route = useRoute()
const apartment = ref({})
const realtor = ref({
  name: 'Пархомюк Олег',
  agency: 'Княжий Дім',
  image: 'src\assets\vue.svg', // тимчасово
})

onMounted(async () => {
  const res = await getApartmentById(route.params.id)
  apartment.value = res
})
</script>
