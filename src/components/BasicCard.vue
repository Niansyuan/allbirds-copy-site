<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
    <div class="h-80 w-64 bg-slate-50">
        <div class="flex flex-col items-center gap-2">
            <div class="h-8 w-2/3">
                <ButtonComponent
                    button-text="BUTTON A"
                    button-color="primary"
                    button-border="primary"
                />
            </div>
            <div class="h-8 w-2/3">
                <ButtonComponent
                    button-text="BUTTON B"
                    button-color="primary"
                    button-border="primary"
                />
            </div>
        </div>
        <div class="px-7 py-4">
            <div>wool</div>
            <div>cozy</div>
        </div>
    </div>
</template>
