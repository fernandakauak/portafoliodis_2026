<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    import { trabajos, prototipos } from '../assets/data_site.json';

    function detalle(id) {
        router.push({ name: 'detalle', params: {id} });
    }
</script>

<template>
    <section class="registro">
        <h1>Encargos y Proyectos</h1>
        <div class="folio-info">
            <p>He estado en varios tipos de ambientes por lo cual he desarrollado soluciones para las distintas necesidades de cada uno. Aquí presento tanto encargos realizados para terceros como proyectos personales.</p>
        </div>
    
        <h2>Trabajos</h2>
        <article class="portafolio">
            <div class="trabajo" v-for="folio in trabajos" :key="folio.id">
                <img v-bind:src="folio.avatar" alt="{{ folio.nombre }}">
                <router-link :to="{ name: 'detalle', params: {id: folio.id}}">HAZ CLICK</router-link>
                <h3>{{ folio.nombre }}</h3>
                <button @click.prevent="detalle(folio.id)">Ver</button>
            </div>
        </article>

        <h2>Prototipos</h2>
        <article class="portafolio">
            <div class="prototipo" v-for="proto in prototipos" :key="proto.id">
                <img v-bind:src="proto.avatar" alt="{{ proto.nombre }}">
                <button @click="detalle(proto.id)">Ver</button>
                <h3>{{ proto.nombre }}</h3>
            </div>
        </article>
    </section>
</template>

<style scoped>
    .registro { 
        background-image: url("../assets/img/bg-header.jpg");
        background-color: grey;
        background-blend-mode: color-burn;
    }

    .registro h1, .registro h2, .registro h3 {
        width: 30%;
        background-color: white;
        border-radius: 50px;
        padding: 2%;
        margin: 1% auto 4%;
        color: darkslategrey;
    }

    .registro h2 {
        padding: 1%;
        width: 20%;
        margin: 1% auto;
    }

    .registro h3 {
        margin: 0 auto;
        width: 80%;
        background-color: darkslategrey;
        color: white;
        padding: 2%;
    }

    .portafolio {
        width: 98%;
        padding: 2% 1%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1%;
    }

    .folio-info {
        width: 80%;
        font-size: 20px;
        background-color: darkslategrey;
        color: lightgray;
        padding: 2%;
        margin: auto;
        border: 10px dashed white;
    }

    .trabajo, .prototipo {
        width: 22%;
        margin: 1%;
    }

    .trabajo button, .prototipo button {
        background-color: white;
        color: midnightblue;
        padding: 2%;
        width: 50%;
        border: 0;
        font-weight: bold;
    }
</style>