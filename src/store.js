import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state, payload) {
            state.count += payload;
        },
    },
    actions: {},
    getters: {},
});

export default store;
