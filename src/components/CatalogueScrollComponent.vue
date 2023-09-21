<script setup>
import BasicCard from '@/components/BasicCard.vue';
import { onMounted } from 'vue';

onMounted(() => {
    // FIXME: This is a temporary fix for the scroll issue
    const scrollContainer = document.querySelector('#carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', e => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX;
        scrollLeft = scrollContainer.scrollLeft;
        console.log(e.pageX, scrollLeft, scrollContainer);
    });

    scrollContainer.addEventListener('mousemove', e => {
        if (!isDown) return;
        scrollContainer.scrollLeft = scrollLeft - (e.pageX - startX);
        console.log(
            scrollLeft,
            scrollLeft - (e.pageX - startX),
            scrollContainer.scrollLeft,
        );
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
});
</script>

<template>
    <div class="flex w-full flex-col items-center py-10">
        <div class="py-4 text-2xl font-bold">Our Favorites</div>
        <div class="flex w-full overflow-auto bg-slate-100 sm:w-2/3">
            <div id="carousel" class="flex w-full gap-4">
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
                <BasicCard card-img="url('/banner.jpg')"></BasicCard>
            </div>
        </div>
    </div>
</template>
