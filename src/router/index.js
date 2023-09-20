import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";
import Cocktail from "@/pages/Cocktail.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/cocktailApp',
            name: 'home',
            component: Home
        },
        {
            path: '/cocktail/:id',
            name: 'cocktail',
            component: Cocktail
        },
        {
            path: '/',
           redirect: '/cocktailApp'
        }
    ]
})

export default router
