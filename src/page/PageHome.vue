<script setup>
import NavBar from '@/components/NavBar.vue';
import BannerComponent from '../components/BannerComponent.vue';
</script>

<template>
    <div className="h-10 w-full">
        <NavBar />
    </div>
    <div className="h-96 w-full">
        <BannerComponent />
        <!-- <div
            class-name="flex flex-col items-center justify-center h-full relative bg-blue-500"
        >
            <div>text</div>
            <div className="absolute bottom-10">
                <div className="left">btn</div>
                <div className="right">btn</div>
            </div>
        </div> -->
    </div>
    <router-link to="/">Go to Home</router-link>
</template>
