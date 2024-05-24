<template>
  <div class="bg-white shadow-lg px-10">
    <img :src="imgsrc" :alt="title" class="w-full object-cover h-[200px]">
    <div class="text p-9">
      <h2 class="text-tua1 font-medium py-1">{{ title }}</h2>
      <a :href="url"><button class="btn bg-tua3 text-tua4 text-medium">Link</button></a>
    </div>
  </div>
</template>

<script setup>
const props =defineProps(['imgsrc', 'title', 'url'])
</script>


