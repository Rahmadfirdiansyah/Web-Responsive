<template>
  <div
    class="container mx-auto px-5 lg:px-20 h-[100vh] md:[80vh] flex flex-col-reverse md:flex-row md:justify-between justify-center items-center gap-10"
  >
    <div class="w-full flex items-center flex-col md:items-start -mt-14 md:mt-0">
      <h1 class="text-2xl md:text-4xl text-center md:text-left text-tua2 my-0">
        {{ name }} <br><strong class="text-tua2 text-5xl lg:text-6xl font-bold">Rahmadfirdiansyah</strong>
      </h1>
      <p class="text-2xl md:text-4x1 text-tua2 my-1 text-center">Junior Developer</p>
      <router-link class=" bg-tua2 hover:bg-tua1 outline-none px-12 py-4 rounded-full mt-3 text-tua4 text-xl font-medium" :to="visit">{{ btnName }}</router-link>
    </div>
    <div class="md:w-7/12 w-[80%] mt-0 justify-center md:mt-0">
      <img :src="imgsrc" alt="homeimg" class="w-[100%] h-[80%] items-center object-cover" />
    </div>
  </div>
</template>

<script setup>
// import routerlink untuk pindah halaman menggunakan tag router-link
import { RouterLink } from "vue-router";
// import define props mendefinisikan props untuk komponen gabungan ex: {{ name }}
import { defineProps } from "vue";
const props = defineProps(["name", "imgsrc", "visit", "btnName"]);
</script>

<style lang="scss" scoped></style>
