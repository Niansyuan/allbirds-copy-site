<script setup>
import BasicCard from '@/components/BasicCard.vue';
</script>

<template>
    <div class="flex w-full flex-col items-center py-10">
        <div class="py-4 text-2xl font-bold">Our Favorites</div>
        <div class="flex w-full overflow-auto bg-slate-100 sm:w-2/3">
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
