<script setup>
import NavBar from '@/components/NavBar.vue';
import BannerComponent from '../components/BannerComponent.vue';
import CataLogueComponent from '../components/CataLogueComponent.vue';
</script>

<template>
    <div class="h-10 w-full">
        <NavBar />
    </div>
    <div class="h-96 w-full">
        <BannerComponent />
    </div>
    <div class="h-max w-full">
        <CataLogueComponent />
    </div>
    <router-link to="/">Go to Home</router-link>
</template>
