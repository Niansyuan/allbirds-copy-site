<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
    <div
        class="box-border flex h-full w-full flex-col items-center justify-center bg-gray-200 py-20"
    >
        <div class="text-lg font-bold text-gray-800">TITLE OF CATALOGUE</div>
        <!-- TABS component -->
        <div
            class="flex w-10/12 items-center justify-center gap-10 border-b-2 border-gray-400 pt-5"
        >
            <div class="text-gray-400 hover:text-gray-700">TAB A</div>
            <div class="text-gray-400 hover:text-gray-700">TAB B</div>
            <div class="text-gray-400 hover:text-gray-700">TAB C</div>
        </div>
        <!-- CARDS component -->
        <div class="py-5">
            <!-- CARD component -->
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
        </div>
    </div>
</template>
