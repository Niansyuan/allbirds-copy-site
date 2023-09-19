<script setup>
import BasicCard from '@/components/BasicCard.vue';
</script>

<template>
    <div class="flex w-full flex-col items-center overflow-hidden py-10">
        <div class="py-4 text-2xl font-bold">Our Favorites</div>
        <div class="flex bg-slate-100">
            <div class="flex w-full gap-4">
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
            </div>
        </div>
    </div>
</template>
