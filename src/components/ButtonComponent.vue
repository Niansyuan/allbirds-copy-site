<script setup>
const props = defineProps(['buttonText', 'buttonColor'])
</script>

<template>
    <!-- FIXME: button 變數沒有吃到 -->
    <div
        :class="`flex h-full w-full flex-col items-center justify-center bg-${props.buttonColor}`"
    >
        {{ props.buttonText }}
    </div>
</template>
