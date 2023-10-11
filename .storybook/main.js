import { mergeConfig } from 'vite';

export default {
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        'storybook-dark-mode',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    async viteFinal(config) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
        });
    },
    docs: {
        autodocs: true
    }
};