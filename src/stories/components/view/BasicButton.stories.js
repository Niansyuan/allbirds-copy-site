import BasicButton from '@/components/view/BasicButton.vue';

export default {
    title: 'Components/BasicButton',
    components: BasicButton,
};

export const Primary = {
    render: () => ({
        template:
            '<div class="flex h-10 w-40"><BasicButton button-text="button" button-color="secondary" button-border="primary"/></div>',
    }),
};
