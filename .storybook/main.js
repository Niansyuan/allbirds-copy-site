import { mergeConfig } from 'vite';

export default {
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        'storybook-dark-mode',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    core: {
        builder: '@storybook/builder-vite', // 👈 The builder enabled here.
    },
    async viteFinal(config) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
        });
    },
    staticDirs: ['../public'],
};