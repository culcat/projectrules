import { createRouter, createWebHashHistory} from 'vue-router';


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: () => import('../pages/Home.vue')},
        {path: '/projects', component: () => import('../pages/Projects.vue')},
        {path: '/about', component: () => import('../pages/About.vue')},

    ]
})