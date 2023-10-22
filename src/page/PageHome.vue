<script setup>
import LayoutBanner from '@/components/composite/LayoutBanner.vue';
import LayoutCatalogue from '@/components/composite/LayoutCatalogue.vue';
import LayoutCatalogueScroll from '@/components/composite/LayoutCatalogueScroll.vue';
import LayoutNavBar from '@/components/composite/LayoutNavBar.vue';
</script>

<template>
    <div class="h-10 w-full">
        <LayoutNavBar />
    </div>
    <div class="h-96 w-full">
        <LayoutBanner />
    </div>
    <div class="h-max w-full">
        <LayoutCatalogue />
    </div>
    <div class="h-max w-full">
        <LayoutCatalogueScroll />
    </div>
    <router-link to="/">Go to Home</router-link>
</template>
