import BasicTab from '@/components/view/BasicTab.vue';

export default {
    title: 'Components/BasicTab',
    components: BasicTab,
};

export const Primary = {
    render: () => ({
        components: { BasicTab },
        template:
            '<div class="flex w-full flex-nowrap overflow-x-auto sm:justify-center"><BasicTab>FOR EVERYDAY</BasicTab><BasicTab>FOR EVERYDAY</BasicTab></div>',
    }),
};
