<script setup>
import BasicCard from '@/components/BasicCard.vue';
</script>

<template>
    <div class="flex flex-col items-center py-10">
        <div class="py-4">Our Favorites</div>
        <div class="bg-slate-100">
            <div class="mb-2 flex items-center justify-center">tab tab tab</div>
            <div class="flex items-center justify-between gap-4">
                <BasicCard></BasicCard>
                <BasicCard></BasicCard>
                <BasicCard></BasicCard>
            </div>
        </div>
        <!-- <div class="text-lg font-bold text-gray-800">TITLE OF CATALOGUE</div>
        TABS component
        <div
            class="flex w-10/12 items-center justify-center gap-10 border-b-2 border-gray-400 pt-5"
        >
            <div class="text-gray-400 hover:text-gray-700">TAB A</div>
            <div class="text-gray-400 hover:text-gray-700">TAB B</div>
            <div class="text-gray-400 hover:text-gray-700">TAB C</div>
        </div>
        CARDS component
        <div class="py-5">
            CARD component
        </div> -->
    </div>
</template>
