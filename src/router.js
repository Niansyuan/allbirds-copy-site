import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/page/PageHome.vue';
import Test from '@/page/Test.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/test', name: 'Test', component: Test },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
