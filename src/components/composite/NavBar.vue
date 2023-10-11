<script setup>
import BasicButton from '@/components/view/BasicButton.vue';
</script>

<template>
    <div class="relative flex h-full w-full items-center bg-orange-900">
        <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <BasicButton
                button-text="I AM LOGO"
                button-color="transparent"
                button-border="icon"
                button-font="large"
            />
        </div>
        <div
            class="absolute right-0 flex h-full flex-row items-center space-x-4 pr-8"
        >
            <BasicButton
                button-text="search"
                button-color="transparent"
                button-border="none"
            />
            <BasicButton
                button-text="account"
                button-color="transparent"
                button-border="none"
            />
            <BasicButton
                button-text="shopping car"
                button-color="transparent"
                button-border="none"
            />
        </div>
    </div>
</template>
