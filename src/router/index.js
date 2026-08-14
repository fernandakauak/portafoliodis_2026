import { createRouter, createWebHistory } from 'vue-router';
import IndexComp from "../components/IndexComp.vue";
import JobComp from "../components/JobComp.vue";
import DetailComp from "../components/DetailComp.vue";
import AboutComp from '../components/AboutComp.vue';
import ContactComp from '../components/ContactComp.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
        {
            path: '/',
            name:'inicio',
            component: IndexComp
        },
        {
            path: '/acerca',
            name:'acercaDe',
            component: AboutComp
        },
        {
            path: '/trabajos',
            name:'trabajos',
            component: JobComp
        },
        {
            path: '/detalle/:id',
            name: 'detalle',
            component: DetailComp,
            props: true
        },,
        {
            path: '/contacto',
            name: 'contacto',
            component: ContactComp,
            props: true
        }
    ]
});

export default router;