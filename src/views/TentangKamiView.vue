<template>
  <div>
    <gabungan :name="'Lanjut lagi'" :imgsrc="home" visit="/project" :btnName="'Lanjut'"/>
  </div>
</template>

<script setup>
// import komponen dan gambar
import gabungan from "@/components/gabungan.vue";
import home from "@/assets/gambar/home.png"
</script>