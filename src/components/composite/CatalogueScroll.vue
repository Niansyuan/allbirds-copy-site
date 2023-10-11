<script setup>
import Card from '@/components/composite/Card.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const refCarousel = ref(null);
const handleClickLeft = () => {
    refCarousel.value.scrollTo({
        left: refCarousel.value.scrollLeft - 260,
        behavior: 'smooth',
    });
};

const handleClickRight = () => {
    refCarousel.value.scrollTo({
        left: refCarousel.value.scrollLeft + 260,
        behavior: 'smooth',
    });
};

let isDown = false;
let startX;
let scrollLeftValue;
const dragStart = e => {
    isDown = true;
    refCarousel.value.classList.add('active');
    startX = e.pageX;
    scrollLeftValue = refCarousel.value.scrollLeft;
};

const dragging = e => {
    if (!isDown) return;
    refCarousel.value.scrollTo({
        left: (e.pageX, scrollLeftValue - (e.pageX - startX)),
    });
};

const dragEnd = () => {
    isDown = false;
    refCarousel.value.classList.remove('active');
};

onMounted(() => {
    refCarousel.value.addEventListener('mousedown', dragStart);
    refCarousel.value.addEventListener('mousemove', dragging);
    refCarousel.value.addEventListener('mouseup', dragEnd);
});

onUnmounted(() => {
    refCarousel.value.removeEventListener('mousedown', dragStart);
    refCarousel.value.removeEventListener('mousemove', dragging);
    refCarousel.value.removeEventListener('mouseup', dragEnd);
});
</script>

<template>
    <div class="relative flex w-full flex-col items-center py-10">
        <div class="py-4 text-2xl font-bold">Our Favorites</div>

        <div class="relative flex w-full bg-slate-100 sm:w-2/3 sm:items-center">
            <div
                class="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-3xl border-2 border-slate-100 bg-white shadow-lg max-sm:hidden"
                @click="handleClickLeft"
            >
                L
            </div>
            <div
                class="absolute right-0 top-1/2 flex h-12 w-12 translate-x-1/2 cursor-pointer items-center justify-center rounded-3xl border-2 border-slate-100 bg-white shadow-lg max-sm:hidden"
                @click="handleClickRight"
            >
                R
            </div>
            <div
                ref="refCarousel"
                class="flex w-full gap-4 overflow-x-scroll whitespace-nowrap"
            >
                <Card card-img="url('/banner.jpg')"></Card>
                <Card card-img="url('/banner.jpg')"></Card>
                <Card card-img="url('/banner.jpg')"></Card>
                <Card card-img="url('/banner.jpg')"></Card>
                <Card card-img="url('/banner.jpg')"></Card>
                <Card card-img="url('/banner.jpg')"></Card>
                <Card card-img="url('/banner.jpg')"></Card>
            </div>
        </div>
    </div>
</template>
