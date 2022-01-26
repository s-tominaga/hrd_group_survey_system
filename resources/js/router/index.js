import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index.js'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isPublic: true
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isPublic: true
        }
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(page => page.meta.isPublic || Store.state.isLogged)) {
        next()
    } else {
        next('/login')
    }
});

export default router
