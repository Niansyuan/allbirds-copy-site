<script setup>
import {
onActivated,
onBeforeMount,
onBeforeUnmount,
onBeforeUpdate,
onDeactivated,
onErrorCaptured,
onMounted,
onRenderTracked,
onRenderTriggered,
onUnmounted,
onUpdated,
ref,
} from 'vue';

const count = ref(0);

onBeforeMount(() => {
    console.log('test', 'onBeforeMount');
});

onMounted(() => {
    console.log('test', 'onMounted');
});

onBeforeUpdate(() => {
    console.log('test', 'onBeforeUpdate');
});

onUpdated(() => {
    console.log('test', 'onUpdated');
});

onBeforeUnmount(() => {
    console.log('test', 'onBeforeUnmount');
});

onUnmounted(() => {
    console.log('test', 'onUnmounted');
});

onActivated(() => {
    console.log('test', 'onActivated');
});

onDeactivated(() => {
    console.log('test', 'onDeactivated');
});

onErrorCaptured(() => {
    console.log('test', 'onErrorCaptured');
});

onRenderTracked(() => {
    console.log('test', 'onRenderTracked');
});

onRenderTriggered(() => {
    console.log('test', 'onRenderTriggered');
});
</script>

<template>
    <div class="button">
        <button @click="count--">-</button>
        <p>count is: {{ count }}</p>
        <button @click="count++">+</button>
    </div>
</template>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 30px;
}
</style>
