<template>
  <div>
    <gabungan :name="'👋Haloo Perkenalkan Saya'" :imgsrc="home" visit="/tentang" :btnName="'Lanjut'"/>
  </div>
</template>

<script setup>
// import komponen dan gambar
import gabungan from "@/components/gabungan.vue";
import home from "@/assets/gambar/home.png"
</script>
