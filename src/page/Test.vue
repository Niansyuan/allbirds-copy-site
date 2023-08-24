<!-- 使用 VUE 3在 script 將所有生命週期log出來 -->
<script setup>
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onActivated, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'
const count = ref(0)

onBeforeMount(() => {
  console.log("test", 'onBeforeMount')
})

onMounted(() => {
  console.log("test", 'onMounted')
})

onBeforeUpdate(() => {
  console.log("test", 'onBeforeUpdate')
})

onUpdated(() => {
  console.log("test", 'onUpdated')
})

onBeforeUnmount(() => {
  console.log("test", 'onBeforeUnmount')
})

onUnmounted(() => {
  console.log("test", 'onUnmounted')
})

onActivated(() => {
  console.log("test", 'onActivated')
})

onDeactivated(() => {
  console.log("test", 'onDeactivated')
})

onErrorCaptured(() => {
  console.log("test", 'onErrorCaptured')
})

onRenderTracked(() => {
  console.log("test", 'onRenderTracked')
})

onRenderTriggered(() => {
  console.log("test", 'onRenderTriggered')
})
</script>

<!-- <script setup>

</script> -->

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
  }
</style>
