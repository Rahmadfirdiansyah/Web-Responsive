<template>
  <div class="container mx-auto px-5 xl:px-24 mt-5">
    <div class="text">
      <h1 class="text-tua1 text-4xl font-bold text-center">Project Geden</h1>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-10 mx-6">
    <div v-for="data in prtData" :key="data">
      <card :imgsrc="data.imgsrc" :title="data.title" :url="data.url"/>
    </div>
</div>
<h1 class=" text-xl text-center font-bold w-full my-10">PLZ follow my github🙏 ==> <a href="https://github.com/Rahmadfirdiansyah" target="_blank"><button class="btn btn-accent font-bold text-white">Github</button></a></h1>
</template>

<script setup>
import card from '@/components/card.vue';
import prtData from "../components/prtData";
</script>
