<script>
    import { ref } from 'vue';
    import job from '../assets/data_site.json';

    export default {
        data() {
            return {
                portafolio: job
            };
        },
    };
</script>

<template>
    <section>
        <h1>Encargos y Proyectos</h1>
        <p>He estado en varios tipos de ambientes por lo cual he desarrollado soluciones para las distintas necesidades de cada uno. Aquí presento tanto encargos realizados para terceros como proyectos personales.</p>
    
        <h2>Trabajos</h2>
        <article class="portafolio">
            <div class="trabajo" v-for="folio in portafolio.trabajos" :key="folio.id">
                <img v-bind:src="folio.img" alt="{{ folio.nombre }}">
                <h3>{{ folio.nombre }}</h3>
            </div>
        </article>

        <h2>Prototipos</h2>
        <article class="portafolio">
            <div class="prototipo" v-for="proto in portafolio.prototipos" :key="proto.id">
                <img v-bind:src="proto.img" alt="{{ proto.nombre }}">
                <h3>{{ proto.nombre }}</h3>
            </div>
        </article>
    </section>
</template>

<style>
    .portafolio {
        width: 98%;
        padding: 2% 1%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1%;
    }

    .trabajo, .prototipo {
        width: 22%;
        margin: 1%;
    }

</style>