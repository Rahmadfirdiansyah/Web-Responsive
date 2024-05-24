<script setup>
import navbar from "./components/navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <navbar />
  </div>
  <router-view />
</template>
