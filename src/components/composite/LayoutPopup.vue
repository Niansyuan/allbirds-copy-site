<script setup>
import { computed, defineProps } from 'vue';

import BasicButton from '@/components/view/BasicButton.vue';

const props = defineProps(['isShow']);

const displayPopup = computed(() => {
    console.log(props.isShow);
    return props.isShow;
});
</script>
<template>
    <div
        v-if="displayPopup"
        class="left-2 top-2 flex h-80 w-64 shrink-0 flex-col items-center bg-slate-50"
    >
        <div>Title Popup</div>
        <div>Popup Content</div>
        <div class="flex h-10 w-40">
            <BasicButton
                button-text="Close"
                button-color="secondary"
                button-border="primary"
            />
        </div>
    </div>
</template>
