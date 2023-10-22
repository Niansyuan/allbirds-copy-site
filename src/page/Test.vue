<!-- 練習查看用 -->

<!-- 使用 VUE 3在 script 將所有生命週期log出來 -->
<script setup>
import { ref } from 'vue';

import TestButton from '@/components/TestButton.vue';

const isCountShow = ref(true);

const handleShow = bool => {
    isCountShow.value = bool;
};
</script>

<template>
    <div class="wrapper">
        <div v-if="isCountShow">
            <TestButton />
        </div>
        <div class="button">
            <button @click="() => handleShow(true)">show</button>
            <button @click="() => handleShow(false)">hidden</button>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 30px;
}
</style>
