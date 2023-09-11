<script setup>
const props = defineProps(['buttonText', 'buttonColor'])

// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const colorVariants = {
    primary: 'bg-stone-500 hover:bg-stone-600 text-white',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white',
}[props.buttonColor]
</script>

<template>
    <div
        :class="`flex h-full w-full flex-col items-center justify-center ${colorVariants}`"
    >
        {{ props.buttonText }}
    </div>
</template>
