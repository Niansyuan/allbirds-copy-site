<script setup>
const props = defineProps([
    'buttonText',
    'buttonColor',
    'buttonBorder',
    'buttonFont',
]);

// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const colorVariants = {
    primary: 'bg-slate-200 hover:bg-slate-500 text-slate hover:text-white',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white',
    transparent: 'bg-transparent text-white',
}[props.buttonColor];

const borderRadiusVariants = {
    primary: 'rounded-md',
    none: 'rounded-none hover:border-b-2 border-white box-border',
    icon: 'rounded-none',
}[props.buttonBorder];

const textVariants = {
    primary: 'text-base font-normal',
    small: 'text-sm font-light',
    large: 'text-lg font-bold',
}[props.buttonFont];
</script>
<!-- TODO: onclick action -->

<template>
    <div
        :class="`flex h-full w-full cursor-pointer flex-col items-center justify-center whitespace-nowrap ${borderRadiusVariants} ${colorVariants} ${textVariants}`"
    >
        {{ props.buttonText }}
    </div>
</template>
