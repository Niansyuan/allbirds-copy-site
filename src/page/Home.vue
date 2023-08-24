<!-- 使用 VUE 3在 script 將所有生命週期log出來 -->
<script setup>
import Test from './Test.vue'
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onActivated, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'
const count = ref(0)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

onErrorCaptured(() => {
  console.log('onErrorCaptured')
})

onRenderTracked(() => {
  console.log('onRenderTracked')
})

onRenderTriggered(() => {
  console.log('onRenderTriggered')
})
</script>

<!-- <script setup>

</script> -->

<template>
  <div v-if="count % 2 == '0'"><Test /></div>
  
  <div class="button">
    <button @click="count--">-</button>
    <p>parent is: {{ count }}</p>
    <button @click="count++">+</button>
  </div>
  <router-link to="/">Go to Home</router-link>
</template>

<style scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
