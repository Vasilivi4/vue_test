<script setup>
defineProps(['apartment'])
</script>

<template>
  <div class="border p-4 rounded shadow p-4">
    <h2 class="text-xl font-semibold">{{ apartment.name }}</h2>
    <p>Ціна: {{ apartment.price }} грн</p>
    <p>Кімнат: {{ apartment.rooms }}</p>
    <p>Площа: {{ apartment.square }} м²</p>
  </div>
</template>
