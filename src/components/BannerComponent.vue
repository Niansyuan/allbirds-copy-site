<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';

const button = 'button bind'; // 常數宣告，若要使用常數，就需要再下方使用bind :button="button"
</script>

<template>
    <div
        class="relative flex h-full w-full flex-col items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-no-repeat"
    >
        <div class="text-2xl font-bold text-white">I AM BANNER</div>
        <div class="absolute bottom-10 flex gap-4">
            <div class="flex h-10 w-40">
                <ButtonComponent
                    :button-text="button"
                    button-color="primary"
                    button-border="primary"
                />
            </div>
            <div class="flex h-10 w-40">
                <ButtonComponent
                    button-text="button"
                    button-color="secondary"
                    button-border="primary"
                />
            </div>
        </div>
    </div>
</template>
