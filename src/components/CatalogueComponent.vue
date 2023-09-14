<script setup>
import BasicCard from '@/components/BasicCard.vue';
import BasicTab from '@/components/BasicTab.vue';
</script>

<template>
    <div class="flex flex-col items-center py-10">
        <div class="py-4">Our Favorites</div>
        <div class="bg-slate-100">
            <div class="mb-2 flex items-center justify-center border-b-2">
                <div class="flex items-center justify-center">
                    <BasicTab>FOR EVERYDAY</BasicTab>
                    <BasicTab>FOR ACTIVITY</BasicTab>
                    <BasicTab>FOR LOUNGING</BasicTab>
                </div>
            </div>
            <div class="flex items-center justify-between gap-4">
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
            </div>
        </div>
    </div>
</template>
