<script setup>
import BasicButton from '@/components/view/BasicButton.vue';

const props = defineProps(['cardImg']);
</script>

<template>
    <div class="flex h-80 w-64 shrink-0 flex-col bg-slate-50">
        <div
            :class="`flex bg-[${props.cardImg}] flex-1 flex-col items-center justify-center gap-2`"
        >
            <div class="h-8 w-2/3">
                <BasicButton
                    button-text="BUTTON A"
                    button-color="primary"
                    button-border="primary"
                />
            </div>
            <div class="h-8 w-2/3">
                <BasicButton
                    button-text="BUTTON B"
                    button-color="primary"
                    button-border="primary"
                />
            </div>
        </div>
        <div class="px-7 py-4">
            <div class="font-extrabold">Wool Lounger</div>
            <div class="text-xs">Cozy Slip-On</div>
        </div>
    </div>
</template>
