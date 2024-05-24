<template>
<header class="flex justify-between bg-white items-center shadow-md h-[80px] px-5 lg:px-24 relative z-10">
    <div class="text-3x1 font-extrabold text-tua2 hover:text-tua1 cursor-pointer">
        <router-link to="/" class="flex items-center text-2xl"><i class="fa-brands fa-vuejs fa-2x"></i>VueMad</router-link>
    </div>
    <nav class="flex flex-col md:flex-row md:bg-transparent p-5 gap-4 md:gap-10 px-6 md:static absolute bg-white shadow-md md:shadow-none md:w-auto my-5 md:my-0 left-0 w-full duration-300 ease-in-out"
     :class="[buka ? 'top-0' : 'top-[-390%]']">
     <router-link to="/" class="text-tua3 py-5 hover:text-tua2 text-xl font-medium">Home</router-link>
     <router-link to="/tentang" class="text-tua3 py-5 hover:text-tua2 text-xl font-medium">Tentang</router-link>
        <router-link to="/project" class="text-tua3 py-5 hover:text-tua2 text-xl font-medium">Project</router-link>
    </nav>
    <div class="text-4x1 text-tua1 cursor-pointer md:hidden z-20" @click="bukaMenu">
        <i :class="[buka ? 'fa-solid fa-x fa-xl' : 'fa-solid fa-bars fa-xl']"></i>
    </div>
</header>
</template>

<script setup>
import {RouterLink} from "vue-router";
import { ref } from "vue";

const buka = ref(false);

const bukaMenu = () => {
    buka.value = !buka.value;
}
</script>
