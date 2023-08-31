<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
    <div
        className="flex flex-col justify-center items-center w-full h-full bg-orange-200 relative"
    >
        <div>I am banner</div>
        <div className="flex w-40 h-20 bg-orange-400 absolute bottom-10">
            <!-- TODO: button切版 -->
            <ButtonComponent />
        </div>
    </div>
</template>
