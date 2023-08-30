<script setup>
import Navigation from '@/components/NavBar.vue';
</script>

<template>
    <div class="navigation">
        <Navigation />
    </div>
    <router-link to="/">Go to Home</router-link>
</template>

<style scoped>
.navigation {
    background-color: red;
    width: 100%;
    height: 60px;
}
</style>
