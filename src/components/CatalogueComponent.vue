<script setup>
import BasicCard from '@/components/BasicCard.vue';
import BasicTab from '@/components/BasicTab.vue';
</script>

<template>
    <div class="flex flex-col items-center py-10">
        <div class="py-4 text-2xl font-bold">Our Favorites</div>
        <div class="w-full bg-slate-100">
            <div
                class="mb-2 flex w-full items-center justify-center border-b-2"
            >
                <div
                    class="flex w-full flex-nowrap overflow-x-auto sm:justify-center"
                >
                    <BasicTab>FOR EVERYDAY</BasicTab>
                    <BasicTab>FOR ACTIVITY</BasicTab>
                    <BasicTab>FOR LOUNGING</BasicTab>
                </div>
            </div>
            <div
                class="flex items-center gap-4 overflow-x-auto sm:justify-center"
            >
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
            </div>
        </div>
    </div>
</template>
