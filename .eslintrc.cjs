module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:tailwindcss/recommended', '@vue/prettier', 'plugin:storybook/recommended'],
    plugins: ['vue', 'tailwindcss', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.vue'],
            },
        },
        'import/core-modules': ['vite', '@vitejs/plugin-vue'],
    },
}
