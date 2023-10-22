<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';

import BasicButton from '@/components/view/BasicButton.vue';
import LayoutPopup from './LayoutPopup.vue';

const button = 'button bind'; // 常數宣告，若要使用常數，就需要再下方使用bind :button="button"
const router = useRouter();
const isShowPopupBanner = ref(false);
const { togglePopup } = defineEmits(['update:is-Show']);

const clickBannerLink = path => {
    router.push(path);
};

const clickBannerPopup = () => {
    isShowPopupBanner.value = !isShowPopupBanner.value;
    togglePopup(isShowPopupBanner.value);
};
</script>

<template>
    <div
        class="relative flex h-full w-full flex-col items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-no-repeat"
    >
        <div class="relative h-max w-full">
            <LayoutPopup
                :is-show="isShowPopupBanner"
                @update:is-show="togglePopup"
            />
        </div>
        <div class="text-2xl font-bold text-white">I AM BANNER</div>
        <div class="absolute bottom-10 flex gap-4">
            <div class="flex h-10 w-40">
                <BasicButton
                    :button-text="button"
                    button-color="primary"
                    button-border="primary"
                    :button-action="() => clickBannerLink('/Test')"
                />
            </div>
            <div class="flex h-10 w-40">
                <BasicButton
                    button-text="show"
                    button-color="secondary"
                    button-border="primary"
                    :button-action="clickBannerPopup"
                />
            </div>
        </div>
    </div>
</template>
