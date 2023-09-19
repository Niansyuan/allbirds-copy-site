<script setup>
import NavBar from '@/components/NavBar.vue';
import BannerComponent from '../components/BannerComponent.vue';
import CatalogueComponent from '../components/CatalogueComponent.vue';
import CatalogueScrollComponent from '../components/CatalogueScrollComponent.vue';
</script>

<template>
    <div class="h-10 w-full">
        <NavBar />
    </div>
    <div class="h-96 w-full">
        <BannerComponent />
    </div>
    <div class="h-max w-full">
        <CatalogueComponent />
    </div>
    <div class="h-max w-full">
        <CatalogueScrollComponent />
    </div>
    <router-link to="/">Go to Home</router-link>
</template>
