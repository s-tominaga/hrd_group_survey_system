import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    // plugins: [
    //     createPersistedState({
    //         key: 'example',
    //         storage: sessionStorage
    //     })],
    state: {
        drawer: false,
        isLogged: false
    },
    mutations: {
        toggleDrawer(state) {
            if (state.drawer) {
                state.drawer = false;
            } else {
                state.drawer = true;
            }
        },
        loggedIn(state) {
            state.isLogged = true;
        },
        loggedOut(state) {
            state.isLogged = false;
        }
    }
});
