import IndexComp from "../components/IndexComp.vue";
import JobComp from "../components/JobComp.vue";
import DetailComp from "../components/DetailComp.vue";

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
        {
            path: '/',
            name:'inicio',
            component: IndexComp
        },
        {
            path: '/:id',
            name: 'foliodetalle',
            component: DetailComp,
            props: true
        },
    ]
});

export default router;