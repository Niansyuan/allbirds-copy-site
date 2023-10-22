<script setup>
import LayoutCard from '@/components/composite/LayoutCard.vue';
import BasicTab from '@/components/view/BasicTab.vue';
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
                <LayoutCard card-img="url('/banner.jpg')"></LayoutCard>
                <LayoutCard card-img="url('/banner.jpg')"></LayoutCard>
                <LayoutCard card-img="url('/banner.jpg')"></LayoutCard>
            </div>
        </div>
    </div>
</template>
