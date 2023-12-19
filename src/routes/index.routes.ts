import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeView.vue'
import Tool from '../views/ToolView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tool',
        name: 'Tool',
        component: Tool
    }
    // {
    //     path: '/:catchAll(*)',
    //     redirect: '/'
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router