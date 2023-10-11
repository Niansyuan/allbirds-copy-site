<script setup>
import Banner from '@/components/composite/Banner.vue';
import Catalogue from '@/components/composite/Catalogue.vue';
import CatalogueScroll from '@/components/composite/CatalogueScroll.vue';
import NavBar from '@/components/composite/NavBar.vue';
</script>

<template>
    <div class="h-10 w-full">
        <NavBar />
    </div>
    <div class="h-96 w-full">
        <Banner />
    </div>
    <div class="h-max w-full">
        <Catalogue />
    </div>
    <div class="h-max w-full">
        <CatalogueScroll />
    </div>
    <router-link to="/">Go to Home</router-link>
</template>
